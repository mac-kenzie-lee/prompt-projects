# Calculator

Calculator is based on a prompt by the Odin Project, and does simple calculations between two numbers at a time. 
It can do simple calculations, and the design is based on a vintage Rockwell Calculator. <p align='center'>
<img src="https://fakewell.mackenziedev.com/fakewell-250-animate.gif" width="400px">
</p>
<p align='center'>
<a href="http://fakewell.mackenziedev.com/">Click here to see the live Site</a>

</p>
The calculator is simple to use, it can be used by either clicking the buttons on the calculator, or pressing different buttons on your keyboard.

#### The CE/C button
  If clicked once, just clears the screen and current number variable -- You will see the default '0.' on the screen after clicking once
  If clicked twice, it clears the memory for past variables, and resets the calculator fully, you will see "Memory cleared" displayed on the screen.
  You can also access ce by pressing: "c" or "e" on your keyboard, you can access c by pressing the backspace button.
  
#### Numbers
  You can click any of the digit buttons to add a number to the calculator, or press down on a key ranging from 1-0 on your keyboard.
  
#### Decimal
  You can click the '.' for the decimal sign. It can only be used once in a number, and can also be accessed by pressing "." on your keyboard.
  
#### Math Operators
  After at least one number is on the screen, you can click on a math operator: */+- to do calculations.
  You can use keyboard keys: "*" "/" "-" and "+" respectively

#### Percentage Operator
  This can be accessed by clicking on the "%" button or using the "%" key on your keyboard
  If you want to use the percentage operator, please note it's not a modulus operation, it finds the percentage of something and operates it on a prior number.
  For example you can use it to find what's 25% of a number and add it to the number.
  You can use it like so: Input to calculator: 50, Next: click "+", next write the percent value 25, next click the "%" button, and select the "=" sign
  
#### Equals Sign
  After selecting one operator, and another number you must click the equals sign before you can do more math. You can access it by clicking "=" or pressing "=" on your keyboard.
 
 
## The Design: 
The UI for this project was inspired by a Rockwell calculator on view at the Computer History Museum in Mountain View, CA. 
Using the following photos for inspiration, the web design was created using CSS, and utilized flexbox and box model properties.

| <a href="ttp://fakewell.mackenziedev.com"><img src="https://user-images.githubusercontent.com/106789729/200477717-ba123c80-6e92-4d68-b009-2bba7c5883de.png" alt="Screenshot of calculator ui"></a> | <a href="https://user-images.githubusercontent.com/106789729/200208078-59f7f40c-3be2-4f70-aef0-d86015934f5b.png"><img src="https://user-images.githubusercontent.com/106789729/200208078-59f7f40c-3be2-4f70-aef0-d86015934f5b.png" alt="Image of rockwell calc from computer museum"></a>  |<a href="https://user-images.githubusercontent.com/106789729/200208225-5fa6b343-d50b-4292-b92f-652777451f7d.png"><img src="https://user-images.githubusercontent.com/106789729/200208225-5fa6b343-d50b-4292-b92f-652777451f7d.png" alt="rockwell calculator image from ebay"></a>  | 
| :---:  | :---:   | :---: |
| **[Fakewell Demo](http://fakewell.mackenziedev.com/)** | **[Link to Computer History Listing](https://www.computerhistory.org/collections/catalog/102632977)**  | **[Link to ebay listing](https://www.ebay.com/itm/155165600450?chn=ps&_trkparms=ispr%3D1&amdata=enc%3A1xx4p0HQIRPuez9-KJZRz9A55&norover=1&mkevt=1&mkrid=711-117182-37290-0&mkcid=2&mkscid=101&itemid=155165600450&targetid=1584739241414&device=c&mktype=&googleloc=9031578&poi=&campaignid=15275224983&mkgroupid=131097072938&rlsatarget=pla-1584739241414&abcId=9300697&merchantid=119149058&gclid=CjwKCAjwtp2bBhAGEiwAOZZTuHiMJDfFcnat-DT_QQKBZvAQecIkrtIfyBWAgnuXaAkOX1jbwNwe9RoCyZAQAvD_BwE)**  |
| Photo of the web project in its' final form |  Photo of the Rockwell Calculator taken at the Computer History Museum in Mountain View, CA | Another rockwell calculator found on ebay | 
<br>
The background image on the website was taken from unsplash: 

[unsplash Link](http://unsplash.com/photos/4YrVF0gVdjk/)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript

The project uses css flexbox to create some of the box styling as well as margins, paddings and more. Various styling has been added to help mimic the lighting and feel of the calculator in css.
For the Javascript, the use of a Calculator object, and multipurpose functions play a role in the logic of the program. 

## Optimizations

After adding in keyboard support for keydown events, there were some issues with the structure of the functions, and they needed to be refactored to be more efficient, various functions were edited and modified to allow for both click events and keyboard events without much issue.

## Lessons Learned:

There was a bug in the program when implementing the keyboard events. While the mouse/click events and functionality of the calculator worked fine. The keyboard 'minus' button kept giving null results when using the keyboard. I found out that the subtraction sign for the click events on the ui was a slightly different line from the subtraction button on a regular keyboard. After determining this was the issue, I fixed the bug. The important thing here is to double check string values from actual values users could input into the program in order to improve usability.


## My Other Projects


| <a href="https://decycle-app.herokuapp.com/"><img src="https://mackenziedev.com/decycle2.gif" alt="decycle site preview"></a>  | <a href="https://github.com/mac-kenzie-lee/drinkLib"><img src="https://github.com/mac-kenzie-lee/drinkLib/blob/master/large-small-dlib.gif?raw=true" alt="small mobile gif of drink lib"></a>  | <a href="https://github.com/mac-kenzie-lee/storyCrafter"><img src="https://github.com/mac-kenzie-lee/storyCrafter/blob/main/storyCrafterGif2.gif?raw=true" alt="Screenshot gif for story crafter"></a> | <a href="https://github.com/mac-kenzie-lee/rockPaperScissorsGame"><img src="https://github.com/mac-kenzie-lee/rockPaperScissorsGame/blob/main/rps.gif?raw=true" alt="rock paper scissors website demo"> </a>| 
| :---:  | :---:   | :---:   | :---: |
| **[Decycle](https://decycle-app.herokuapp.com/)** | **[DrinkLib](https://github.com/mac-kenzie-lee/drinkLib)**  | **[Story Crafter](https://github.com/mac-kenzie-lee/storyCrafter)**  | **[Rock Paper Scissors](https://github.com/mac-kenzie-lee/rockPaperScissorsGame)** | 
| Connecting businesses with recyclers to bring value to everyone. |  Find your next cocktail | Remember your wins & grow your career | Bright, simple challenge VS the computer. |
| <a href="https://github.com/mac-kenzie-lee/not-too-boring/"><img src="https://github.com/mac-kenzie-lee/not-too-boring/blob/main/nottooboring.gif?raw=true" alt="Not Too Boring website demonstration"></a> | <a href="https://github.com/mac-kenzie-lee/etch-a-sketch-project"><img src="https://github.com/mac-kenzie-lee/etch-a-sketch-project/blob/main/etchasketch.gif?raw=true" alt="Etch a sketch demo"></a> | <a href="https://fakewell.mackenziedev.com/"><img src="https://camo.githubusercontent.com/88645933ac6a3ba4f25ef4fc14b8562a27e12d4b909e4aaaa00278a04688059b/68747470733a2f2f66616b6577656c6c2e6d61636b656e7a69656465762e636f6d2f66616b6577656c6c2d3235302d616e696d6174652e676966" alt="fakewell site"></a>  | <a href="https://korean-greetings-api.herokuapp.com/"><img src="https://user-images.githubusercontent.com/106789729/201503638-58940bcc-af5f-4c21-904d-d4ffd9778f17.gif" alt="small mobile gif of korean greeting api"></a>
|  **[Not Too Boring](https://github.com/mac-kenzie-lee/not-too-boring/)**  | **[Etch A Sketch Project](https://github.com/mac-kenzie-lee/etch-a-sketch-project)** | **[Fakewell](https://fakewell.mackenziedev.com/)** | **[Korean Greetings API](https://korean-greetings-api.herokuapp.com/)**  |
| Rainy, hot, cold days won't stop you from having a good time in these cities... | A retro throwback drawing application allows for pixelated sketching | Calculate, the clunky old style way |  Find greetings in Korean with this API | 
<br>

