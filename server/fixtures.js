Meteor.startup(function(){

  //check if database is empty
  if(Flowers.find().count() === 0){
  	//insert flower 1
    	Flowers.insert({
    		index: 1,
    		name: "Flower 1",
    		image: 'http://www.pune-flower-shop.com/pune_florist_online_flowers/ny_online_pune_flower.jpg',
    		price: 200,
    		color: 'red'
    	});

    	//insert flower 2
    	Flowers.insert({
    		index: 2,
    		name: "Flower 2",
    		image: 'http://cpflowershop.com/upload/userfiles/images/Blue-flowers.jpg',
    		price: 300,
    		color: 'blue'
    	});
    	
    	//insert flower 3
    	Flowers.insert({
    		index: 3,
    		name: "Flower 3",
    		image: 'https://s-media-cache-ak0.pinimg.com/236x/f4/1f/76/f41f7677eecb76a41e6a0ad26663ad9a.jpg',
    		price: 500,
    		color: 'green'
    	});

      //insert flower 4
      Flowers.insert({
        index: 4,
        name: "Flower 4",
        image: 'https://www.creativebeadcraft.co.uk/images//detail/3-Kit26x3.jpg',
        price: 300,
        color: 'pink'
      });


      //insert flower 5
      Flowers.insert({
        index: 5,
        name: "Flower 5",
        image: ' http://www.flowercard123.co.uk/wp-content/uploads/2014/10/Pink-Tulips-Flower-Card1.jpg',
        price: 320,
        color: 'pink'
      });


      //insert flower 6
      Flowers.insert({
        index: 6,
        name: "Flower 6",
        image: 'https://www.radhikaflowers.co.uk/upload/products/hindu%20-funeral.jpg',
        price: 200,
        color: 'pink'
      });
  }

});