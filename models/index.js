var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/tripplanner', {
	logging: false
});




var Place = db.define('place', {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
    	type: Sequelize.STRING,
		allowNull: false
    },
    phone: {
    	type: Sequelize.STRING,
		allowNull: false

    },
    location: {
    	type: Sequelize.ARRAY(Sequelize.FLOAT)

    }
});

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false

	},
	num_stars: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 1, max: 5
		}

	},
	amenities: {
		type: Sequelize.STRING,
		allowNull: false
	}
});



var Activity = db.define('activity', {
    name: {
    	type: Sequelize.STRING,
		allowNull: false
    },
    age_range: {
    	type: Sequelize.STRING,
		allowNull: false
    }
    
});

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 1, max: 5
		}
	}
});





Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);



module.exports = {
	place: Place,
	hotel: Hotel,
	activity: Activity,
	restaurant: Restaurant,
	db2: db

}