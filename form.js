class Form{
    constructor(){
        this.input= createInput("name");
        this.button= createButton("play");
        this.greeting= createElement("h3");
        this.title= createElement("h2");
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
    display(){
        this.title.html("HURDLES GAME");
        this.title.position(150,100);

        this.input.position(200,200);
        this.button.position(200,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name= this.input.value();
            playerCount+=1;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("HELLO" + player.name);
            this.greeting.position(200,200);
        })

    }
}