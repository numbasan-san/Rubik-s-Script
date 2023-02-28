
var sides = [			   										  [['R', 'R', 'R'], ['R', 'R', 'R'], ['R', 'R', 'R']],
			 [['B', 'B', 'B'], ['B', 'B', 'B'], ['B', 'B', 'B']], [['W', 'W', 'W'], ['W', 'W', 'W'], ['W', 'W', 'W'] ], [['G', 'G', 'G'], ['G', 'G', 'G'], ['G', 'G', 'G']],
			 			   										  [['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']],
			 			 										  [['Y', 'Y', 'Y'], ['Y', 'Y', 'Y'], ['Y', 'Y', 'Y']]
			]

for (var x = 0; x < sides.length; x++) {
	for (var y = 0; y < sides[x].length; y++) {
		for (var z = 0; z < sides[x][y].length; z++) {
			console.log(sides[x][y][z]);
		}
	}
}
/**/
