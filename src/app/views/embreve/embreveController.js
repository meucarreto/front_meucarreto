app.controller('embreveController', ['$scope', function($scope){
	
	$scope.estilo = 'background: -webkit-radial-gradient(80% 10%, circle, #1a3758, transparent), -webkit-radial-gradient(80% 50%, circle, #69dce6, transparent)';
	// var colors = new Array(
	//   [26,55,88],
	//   [13,98,164],
	//   [105,220,230],
	//   [105,180,233]);

	// var step = 0;
	// //color table indices for: 
	// // current color left
	// // next color left
	// // current color right
	// // next color right
	// var colorIndices = [0,1,2,3];

	// //transition speed
	// var gradientSpeed = 0.0050;

	// function updateGradient() {

	// 	var c0_0 = colors[colorIndices[0]];
	// 	var c0_1 = colors[colorIndices[1]];
	// 	var c1_0 = colors[colorIndices[2]];
	// 	var c1_1 = colors[colorIndices[3]];

	// 	var istep = 1 - step;
	// 	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	// 	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	// 	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	// 	var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

	// 	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	// 	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	// 	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	// 	var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

	// 	$scope.estilo = 'background: -webkit-radial-gradient(80% 10%, circle, '+hexToRgb(color1)+', transparent), -webkit-radial-gradient(80% 50%, circle, '+hexToRgb(color2)+', transparent)';
	// 	$scope.$apply();
		
	// 	step += gradientSpeed;
	// 	if ( step >= 1 )
	// 	{
	// 	  step %= 1;
	// 	  colorIndices[0] = colorIndices[1];
	// 	  colorIndices[2] = colorIndices[3];
		  
	// 	  //pick two new target color indices
	// 	  //do not pick the same as the current one
	// 	  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	// 	  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		  
	// 	}
	// } setInterval(updateGradient,100);


	// function hexToRgb(hex) {
	// 	console.log(hex)
	// 	if(hex.length < 7){
	// 		hex = '#1a3758';
	// 	}
	//     var c;
	//     if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
	//         c= hex.substring(1).split('');
	//         if(c.length== 3){
	//             c= [c[0], c[0], c[1], c[1], c[2], c[2]];
	//         }
	//         c= '0x'+c.join('');
	//         return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
	//     }
	//     throw new Error('Bad Hex');
	// }

	$scope.seo.title = "Meu Carreto"

}])