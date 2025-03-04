const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
const displayInputCheckbox = document.getElementById('displayInputCheckbox');
const frames = 347;
const keysPressed = {};
const correctInputs = [[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,1,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,0]
,[0,1,1,0,0,0,0,0],[0,1,1,0,0,0,0,1],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
,[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,0,1,0,0,0,0]
,[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0]
,[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0]
,[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,0,0,0,0]
,[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]
,[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
const state = Object.freeze({
    RUNNING: 0,
    RESULT: 1,
    WAITING: 2
});
var gameState = state.WAITING;
var fps = 30;
var frameLength = 1000 / fps;
var lastTickTime = Date.now();
var currentTime = Date.now();
var currentFrame = 1;
var images = {};
var saveState = 1;
var displayInput = true;

// prevents keyboard from scrolling
window.addEventListener('keydown', function(event)
{
	if (event.key === " " || event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || 	event.key === "ArrowRight")
	{
		event.preventDefault();
	}
});

window.addEventListener("keydown", (event) =>
{
	keysPressed[event.key] = true;
});

window.addEventListener("keyup", (event) =>
{
	keysPressed[event.key] = false;
});

canvas.addEventListener("click", () =>
{
	canvas.focus();
});

document.addEventListener('click', function(event)
{
	if(event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT' && event.target.type === 'checkbox')
	{
		canvas.focus();
	}
});

displayInputCheckbox.addEventListener('change', function()
{
	if (displayInputCheckbox.checked)
	{
		displayInput = true;
	}
	else
	{
		displayInput = false;
	}
});

PreloadImages()
	.then(results =>
	{
		results.forEach(({index, image}) =>
		{
			images[index] = image;
		});
	document.getElementById("loadingText").remove();
	canvas.width = images[currentFrame].width;
	canvas.height = images[currentFrame].height;
	canvas.tabIndex = 0;
	canvas.focus();
	GameLoop();
	})
	.catch(err =>
		{
			console.log('image failed to load');
		});

function GameLoop()
{
	currentTime = Date.now();
	var timeDifference = currentTime - lastTickTime;
	if(timeDifference > frameLength)
	{
		lastTickTime = currentTime - (timeDifference % frameLength);
		Update();
		canvasContext.clearRect(0, 0, canvas.width, canvas.height);
		Draw();
	}
	requestAnimationFrame(GameLoop);
}

function Update()
{		
	if(document.activeElement === canvas)
	{	
		var actualInput = GetInput();
		var fixedInput = FixInput(actualInput);
		switch(gameState)
		{
			case state.RUNNING:
				if(currentFrame >= frames)
				{					
					gameState = state.RESULT;
					break;
				}
				if(!CompareArrays(fixedInput, correctInputs[currentFrame - 1]))
				{
					gameState = state.RESULT;
					break;
				}
				if(currentFrame < frames)
				{
					currentFrame++;
				}
				break;
			case state.RESULT:
				if(keysPressed["r"])
				{
					gameState = state.WAITING;
				}
				break;
			case state.WAITING:
				currentFrame = saveState;
				if(CompareArrays(fixedInput, correctInputs[currentFrame - 1]))
				{					
					gameState = state.RUNNING;
				}
				break;
			default:
				console.log('gameState error');
		}			
	}
}

function Draw()
{
	DrawImage(canvas, canvasContext, images[currentFrame]);
	if(document.activeElement !== canvas)
	{
		DrawText(canvas, canvasContext, 'Simulation paused - Click to resume', canvas.width/2, canvas.height/2);
	}
	if(gameState == state.RESULT && displayInput)
	{
		if(currentFrame >= frames)
		{
			DrawText(canvas, canvasContext, 'Victory! - Press R to restart', canvas.width/2, canvas.height/1.1);
		}
		else
		{
			DrawText(canvas, canvasContext, 'Failed input on this frame - Press R to restart', canvas.width/2, canvas.height/1.1);
		}	
	}
}

function FixInput(input)
{
	var newInput = input;
	// if left and right pressed
	if(newInput[0] && newInput[1])
	{
		//unpress both
		newInput[0] = 0;
		newInput[1] = 0;
	}
	// if up and down pressed
	if(newInput[2] && newInput[3])
	{
		//unpress both
		newInput[2] = 0;
		newInput[3] = 0;
	}
	// after jump and after grab
	if(currentFrame > 128 && currentFrame < 207 || currentFrame > 215)
	{
		// space being pressed doesn't matter on these frames
		newInput[4] = 0;
	}
	// if ejected from segway
	if(currentFrame > 134)
	{
		//pressing z no longer matters
		newInput[7] = 0;
		// pressing up or down makes left and right meaningless
		if(newInput[2] == 1 || newInput[3] == 1)
		{
			newInput[0] = 0;
			newInput[1] = 0;
		}
	}
	// doesn't matter what arrow key you use mid-air. comparison inputs presses all
	if(currentFrame > 232)
	{
		if(newInput[0] || newInput[1] || newInput[2] || newInput[3])
		{
			newInput[0] = 1;
			newInput[1] = 1;
			newInput[2] = 1;
			newInput[3] = 1;
		}
	}
	// inputs no longer matter
	if(currentFrame >= 305)
	{
		newInput = [0,0,0,0,0,0,0,0];
	}
	return newInput;
}

function GetInput()
{
	var input = [0, 0, 0, 0, 0, 0, 0, 0];
	if(keysPressed["ArrowLeft"])
	{
		input[0] = 1;
	}
	if(keysPressed["ArrowRight"])
	{
		input[1] = 1;
	}
	if(keysPressed["ArrowUp"])
	{
		input[2] = 1;
	}
	if(keysPressed["ArrowDown"])
	{
		input[3] = 1;
	}
	if(keysPressed[" "])
	{
		input[4] = 1;
	}
	if(keysPressed["Shift"])
	{
		input[5] = 1;
	}
	if(keysPressed["Control"])
	{
		input[6] = 1;
	}
	if(keysPressed["z"])
	{
		input[7] = 1;
	}
	return input;
}

function LoadSaveState()
{
	var frame = parseInt(document.getElementById("saveState").value, 10);
	if(Number.isInteger(frame) && frame > 0 && frame <= frames)
	{
		saveState = frame;
		currentFrame = saveState;
		gameState = state.WAITING;
	}
}

function SetFramerate()
{
	var newFps = parseInt(document.getElementById("framerate").value, 10);
	if(Number.isInteger(newFps) && newFps > 0 && newFps <= 60)
	{
	fps = newFps;
	frameLength = 1000 / fps;
	}
}

function PreloadImages()
{
	var promises = [];
	for (let i = 1; i <= frames; i++)
	{
		promises.push(new Promise((resolve, reject) =>
		{
		var img = new Image();
		img.src = `images/${i}.png`;
		img.onload = () => resolve({index: i, image: img});
		img.onerror = reject;
		}));
	}
	return Promise.all(promises);
}

function DrawImage(canvas, ctx, image)
{
	if(image === undefined)
	{
		return;
	}        
        ctx.drawImage(image, 0, 0);
}

function DrawText(canvas, ctx, text, x, y)
{
	ctx.font = '80px Arial';
	ctx.fillStyle = 'White';
	ctx.strokeStyle = 'Black';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(text, x, y);
	ctx.strokeText(text, x, y);
}

function CompareArrays(arr1, arr2)
{
	if(arr1 === undefined || arr2 === undefined)
	{
		return false;
	}
	if (arr1.length !== arr2.length)
	{
	return false;
	}
	for (let i = 0; i < arr1.length; i++)
	{
		if (arr1[i] !== arr2[i])
		{
		return false;
		}
	}
return true;
}