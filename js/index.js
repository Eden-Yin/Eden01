// 一 点击右侧按钮实现轮播
// 1.1 定义一个变量表示控制的索引 （从0开始）
var index = 0;
var lock = true;    // 定义一lock用来控制用户疯狂点击的行为。  
// 1.2 给右侧按钮注册点击事件
$('#rightBtn').click(function(){
	// 如果是true就进来
	if (lock) {
			//进来时，先锁上
			lock = false;
			// 1.2.1 计算出显示下一张图片时，外层id为content div的坐标。
			// 改变index的值 + 1  index * -790
			index++;
			var targetValue = index * -790;
			// 1.2.2 给id为content div注册动画
      console.log(index);
      
			$('#content').animate({left:targetValue},function(){
				// 每次运动完之后，看是否已经到了最后一张，如果到了最后一张
				// 则快速更改content的样式，并且更改index为0
				if (index == 7) {
					$('#content').css('left',0);
					index = 0;
				}
				// 完事儿后把门打开，方便下一次点击
				lock = true;
			});
			console.log(index);

			/*更改li的样式*/
			var temp = index; // 想要使用index但是不能更改index，因为更改操作在上面
			if(temp==7) { 
				temp = 0;
			}
			$('#control li').eq(temp).addClass('active').siblings().removeClass('active');

	}
});


//二. 点击左侧按钮实现轮播
// 2.1 给左侧按钮注册点击事件
$('#leftBtn').click(function(){
	// 如果是true就进来
	if (lock) {
			//进来时，先锁上
			lock = false;
			// 2.2 计算出显示下一张图片时，外层id为content div的坐标。
			// 改变index的值 - 1  index * -790
			index--;
			if(index<0) {
				$('#content').css('left',-5530);
				index = 6;
			}
			var targetValue = index * -790;
			// 2.3 给id为content div注册动画
			console.log(index);
			$('#content').animate({left:targetValue},function(){
				// 完事儿后把门打开，方便下一次点击
				lock = true;
			});

			/*更改li的样式*/
			var temp = index; // 想要使用index但是不能更改index，因为更改操作在上面
			$('#control li').eq(temp).addClass('active').siblings().removeClass('active');

	}
});
