class Security2 {

    constructor(){

        this.access3 = createInput("Enter The Answer")
        this.access3.position(100,90);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,120);
        this.button3.style('background', 'lightgrey');    

        this.access4 = createInput("Enter The Answer")
        this.access4.position(700,190);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(700,220);
        this.button4.style('background', 'lightgrey');
        
    }

    display(){

        this.button3.mousePressed(() => {
            if(system2.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system2.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

    }
}