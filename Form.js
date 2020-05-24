class Form {
       constructor() {
    this.greeting = createElement('h2');
    this.input = createInput("Name");
    this.input.style('width', '160px');
    this.block = createInput("Block.no");
    this.block.style('width', '160px');
    this.button = createButton('Submit'); 
    this.title = createElement('h1');
    this.name = createElement('h2');
    this.blockinput = createElement('h2');
    

        this.button.style('width','120px');
        this.button.style('height','60px');
        this.button.style('background','yellow');
this.name.style('widtht','20px');
        //question 1
        this.question1 = createElement('h4', "Q1.ARE THERE SAFETY MEASURE IN THE SOCIETY??");
        this.radio = createRadio('h4');
        this.radio.option('YES');
        this.radio.option('NO');
        this.radio.style('width', '60px');

         //question 2
         this.question2 = createElement('h4', "Q2. DO THEY FULFILL PROMISES THAT THEY MAKE WHEN YOU BUY THE FLAT");
         this.radio1 = createRadio('h5');
         this.radio1.option('YES');
         this.radio1.option('NO');
         this.radio1.style('width', '60px');
 
         //question 3
        this.question3 = createElement('h4', "Q3. DO THEY CONTRIBUTE TO THE NEEDY PEOPLE OR THEY GIVE MONEY TO CHARITY??");
        this.radio2 = createRadio('h5');
        this.radio2.option('YES');
        this.radio2.option('NO');
        this.radio2.style('width', '60px');

         //question 4
         this.question4 = createElement('h4', "Q4. HOW MUCH MONEY THEY CONTRIBUTE TO CHARITY??");
         this.radio3 = createRadio('h5');
         this.radio3.option('300-600');
         this.radio3.option('700-1000');
         this.radio3.option('MORE');
         this.radio3.style('width', '90px');
        
        
        //question 5
        this.question5 = createElement('h4', "Q4. DO THEY CELEBRATE THE  FESTIVAL IN SOCIETY??");
        this.radio4 = createRadio('h5');
        this.radio4.option('YES');
        this.radio4.option('NO');
        this.radio4.style('width', '60px');
        

        this.description = createInput("PLEASE ADD HERE");
        this.description.style('width','420px');
        this.description.style('height','100px');

        this.desc= createElement('h4',"IF YOU HAVE ANY QUESTION RELATED TO THIS YOU CAN REFER BELOW-");
}
display(){
  this.title.html("SOCIETY SURVEY FORM");
  this.title.position(displayWidth/2-180 ,20);
  this.name.html("Name");
  this.name.position(displayWidth/2-80 ,102);
  this.input.position(displayWidth/2+ 10, 125);
  this.blockinput.html("Block.no");
  this.blockinput.position(displayWidth/2-110 ,200);
  this.block.position(displayWidth/2+10 ,225);
  this.button.position(displayWidth/2-50,1050);
  

  this.question1.position(displayWidth/2-200, 300);
  this.radio.position(displayWidth/2, 360);
  
  this.question2.position(displayWidth/2-240, 400);
  this.radio1.position(displayWidth/2, 460);

  this.question3.position(displayWidth/2-240, 500);
  this.radio2.position(displayWidth/2 , 560);

  this.question4.position(displayWidth/2-240, 600);
  this.radio3.position(displayWidth/2 , 660);

  this.question5.position(displayWidth/2-240, 720);
  this.radio4.position(displayWidth/2 , 780);

  this.desc.position(displayWidth/2-240,840);

  this.description.position(displayWidth/2,900);
  this.description.style('color', 'rgb(237, 227, 227)');
  this.description.style('font-size', '20px');

 

  this.button.mousePressed(() => {
      this.greeting.show();
      this.description.hide();
      this.greeting.html("THANKS, NOW WE TOGETHER CHANGE THE SOCIETY!!");
      this.greeting.position(displayWidth/2-30,810);
      this.greeting.style('width', '500px');
      this.greeting.style('height', '50px');
      this.greeting.style('background','lavender');
      this.greeting.style('padding','30px')
      User.input = this.input.value();
      User.block = this.block.no.value();
      User.radio= this.radio.value();
      User.radio1= this.radio1.value();
      User.radio2= this.radio2.value();
      User.radio3= this.radio3.value();
      personCount += 1;
      User.index = personCount;
      User.update();
      User.updateCount(peopleCount);
      });
    
}
}