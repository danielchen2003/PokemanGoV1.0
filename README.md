# PokemanGoV1.3

I made this game base on the pokeman API project working with my classmate Dominik togather. I improve it through indtroduce Dice and Battle system individually in Per scholor four months Fulltime high intensive computer Science BootCamp. Have fun Engjoy this game.!

## Step 1 Choose your faverate pokeman

click ready for battle and click roll start battle.Once you selected pokeman it will shake, and click Start Game to Battle 
![Happy Christmas](/img/pic1.png)


第一个选人 ，选中人后会shaking  转到第二页 用local 内存

战斗顺序，谁的速度快 谁优先攻击
如果骰子 dice 戴斯<= 6   miss the attack 7 -12  1.2 demage 13- 17  1.5 demage dice ===18  2.5 demage
	
每次投掷骰子 就会出现，不然就消失
背景绿色会跳动 随着active player swap（）  indicate  who’s turn it is now
我加一个 dealy easy for people to watch the game and observe wait for the attack aimation
Next Game 开始一个新游戏无论你输赢都可以开始新比赛
如果要重选人就要返回第一页
经验打败一个敌人就有100exp
超过100exp就可以进化到下个level
Healthbar。是动态的展示血量， 加了一个delay 效果更好看 The effect looks better

每当你打赢了比赛并且 经验超过100就可以进化到下一个等级
5 ，7  10以下
进化系统我取得数据比较麻烦，因为不是直接可以拿到的数据
我先找到选中pokeman的Species 的url
Axios fetch data 找到evolution chian in species obj
再找到属性Evlution to 找到target
Iniilization里面替换选中的pokeman

为了完整看到动画我给roll dice 加了一个3秒冷却
输了我加了一个过场动画
输了可以用next game restart
赢了并且有100经验的话就可以进化下一个level

结束以后不能继续战斗因为加入了一个isplaying check
![image](https://user-images.githubusercontent.com/104922779/175843218-7cccbe85-befe-4f49-b6e5-f0cf728bb4fa.png)

