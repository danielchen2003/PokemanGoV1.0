# PokemanGoV1.3

I made this game base on the pokeman API project working with my classmate Dominik togather. I improve it through indtroduce Dice and Battle system individually in Per scholor four months Fulltime high intensive computer Science BootCamp. Have fun Engjoy this game.!

## Step 1 Choose your faverate pokeman

Once you selected pokeman and click on the card will shake, and click Start Game to Battle 
![Choose](/img/pic1.png)

转到第二页 用local 内存
## Step 2 Battle Start
 Cick Roll dice to begin, attack sequence depends on speed, the faster one attack first. 
 If  dice < 6 then miss the attack. 
 If  7 < dice < 12 then  generate 1.2 * demage . 
 If  13 dice < 17 then generate 1.5 demage.
 If  dice =18   then cirtical attack of 2.5 demage.
 The actural demage will calculate the opponent's defensive ability.
 
#### About Dice Rolling
Every time the dice are rolled, they appear, otherwise they will disappear. before Game start and over it will keep hidden.
In order to see the full animation I added a 3-second cooldown to roll dice.
![Roll](/img/pic7.png)

	
#### The background color of Acitive Player is light green
![activeplauer](/img/pic2.png)
The background color wil swap after each turn

#### About delay
I add light delay easy for people to watch the game and observe wait for the attack aimation

#### Next Game button
After you win or lose the game you can click the Next Game Button to restart this game with same pokeman. If you decided to change a pokeman, then you have to go back to first page and choose pokeman again.

#### About Exp and Evolution system
One you reach 100 exp and win the battle you are able to evolute to the next level pokeman.
![evolution3](/img/pic9.png)
![evolution4](/img/pic8.png)
![evolution1](/img/pic5.png)
![evolution2](/img/pic6.png)

#### Healthbar
Health bar 
Healthbar is a dynamic display of blood levels, with the addition of a delay function, The effect looks better.


进化系统我取得数据比较麻烦，因为不是直接可以拿到的数据
我先找到选中pokeman的Species 的url
Axios fetch data 找到evolution chian in species obj
再找到属性Evlution to 找到target
Iniilization里面替换选中的pokeman


输了我加了一个过场动画
输了可以用next game restart
赢了并且有100经验的话就可以进化下一个level

结束以后不能继续战斗因为加入了一个isplaying check
![image](https://user-images.githubusercontent.com/104922779/175843218-7cccbe85-befe-4f49-b6e5-f0cf728bb4fa.png)

