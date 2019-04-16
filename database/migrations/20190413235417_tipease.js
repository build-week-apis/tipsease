
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('username', 128)
            .notNullable()
            .unique()

        tbl.string('fullName', 128)
            .notNullable()

        tbl.string('password', 128)
            .notNullable()

        tbl.string('photoUrl', 128)

    }).createTable('serviceWorkers', tbl => {
        tbl.increments();
        
        tbl.string('username', 128)
            .notNullable()
            .unique()

        tbl.string('fullName', 128)
            .notNullable()

        tbl.string('password', 128)
            .notNullable()

        tbl.string('photoUrl', 128)

        tbl.string('serviceType', 128)
            .notNullable()

        tbl.string('timeAtJob', 128)

        tbl.string('tagline', 256)

        tbl.string('bio', 256)

        tbl.string('workplace', 128)

        tbl.float('accountBalance', 8)
        
        tbl.float('rating', 8)

        tbl.integer('numOfRatings', 8)
    }).createTable('bankTransfers', tbl => {
        tbl.increments();

        tbl.string('username', 128)
            .notNullable()

        tbl.float('balanceInquiry', 8)
            .notNullable();

        tbl
            .integer('sw_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('serviceWorkers')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
        .dropTableIfExists('serviceWorkers')
        .dropTableIfExists('bankTransfers')
};
