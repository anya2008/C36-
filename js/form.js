class Form
{
    constructor()
    {
        
    }

    display()
    {
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(230,10);

        var input = createInput("Name");
        input.position(220,230);

        var button = createButton("Play");
        button.position(250,260);
        
        button.mousePressed( function () {
        
            input.hide();
            button.hide();

            var name = input.value();
            playerCount+=1 ;

            var greeting = createElement("h4");
            greeting.position(230,250);
            greeting.html("hi"+ name)

    })



         
    }

}