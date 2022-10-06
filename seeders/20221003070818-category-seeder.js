'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('categories',[
        {
          name: 'Nodejs'
        },
        {
          name: 'VueJs'
        },
        {
          name: 'ReactJs'
        },
        {
          name: 'reactNative'
        },
        {
          name:'Laravel'
        },
        {
          name:'Flutter'
        }
      ]);
    
  },
   
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
   