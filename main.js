const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
const displayRestartCheckbox = document.getElementById('displayRestartCheckbox');
const displayInputFeedbackCheckbox = document.getElementById('displayInputFeedbackCheckbox');
const frames = 347;
const totalImages = frames + 8;
const keysPressed = {};
const correctInputs =
[[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0],[0,0,1,0,0,0,0,0]
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
,[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0]
,[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]
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
let gameState = state.WAITING;
let fps = 30;
let frameLength = 1000 / fps;
let lastTickTime = Date.now();
let currentTime = Date.now();
let currentFrame = 1;
let levelImages = {};
let keyboardImages = {};
let imagesLoaded = 0;
let saveState = 1;
let displayRestartMessage = true;
let displayInput = true;
let lastInput = [0,0,0,0,0,0,0,0]

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

displayRestartCheckbox.addEventListener('change', function()
{
	displayRestartMessage = displayRestartCheckbox.checked;
});

displayInputFeedbackCheckbox.addEventListener('change', function()
{
	displayInput = displayInputFeedbackCheckbox.checked;
});

StartGame();

function GameLoop()
{
	currentTime = Date.now();
	let timeDifference = currentTime - lastTickTime;
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
		let actualInput = GetInput();
		let fixedInput = FixInput(actualInput.slice());
		switch(gameState)
		{
			case state.RUNNING:
				if(currentFrame >= frames)
				{					
					gameState = state.RESULT;
					break;
				}
				lastInput = actualInput;
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
	DrawImage(canvas, canvasContext, levelImages[currentFrame], 0, 0);	
	if(document.activeElement !== canvas)
	{
		DrawText(canvas, canvasContext, 'Simulation paused - Click to resume', canvas.width/2, canvas.height/2);
	}
	if(gameState == state.RESULT)
	{
		if(currentFrame >= frames)
		{
			if(displayRestartMessage)
			{
				DrawText(canvas, canvasContext, 'Victory! - Press R to restart', canvas.width/2, canvas.height/1.1);

			}
		}
		else
		{
			if(displayRestartMessage)
			{
				DrawText(canvas, canvasContext, 'Failed input on this frame - Press R to restart', canvas.width/2, canvas.height/1.1);
			}			
			if(displayInput)
			{
				DrawText(canvas, canvasContext, 'Input:', canvas.width/16.75, canvas.height/17.75);
				DrawText(canvas, canvasContext, 'Want:', canvas.width/1.78, canvas.height/17.75);
				DrawPlayerInput(canvas, canvasContext);
				DrawCorrectInput(canvas, canvasContext);
			}
		}	
	}
}

function StartGame()
{
	let levelImagePaths = [];
	for(let i = 1; i <= frames; i++)
	{
		levelImagePaths.push(`level_images/${i}.png`);
	}
	let keyboardImagePaths =
	["keyboard_images/Left.png", "keyboard_images/Right.png", "keyboard_images/Up.png", "keyboard_images/Down.png"
	, "keyboard_images/Space.png", "keyboard_images/Shift.png", "keyboard_images/Ctrl.png", 	"keyboard_images/Z.png"];
	
	Promise.all([
	PreloadImages(levelImagePaths),
	PreloadImages(keyboardImagePaths)
		])
		.then(([levelImageResults, keyboardImageResults]) =>
		{
			levelImageResults.forEach(({index, image}) =>
			{
				levelImages[index+1] = image;
			});
			keyboardImageResults.forEach(({index, image}) =>
			{
				keyboardImages[index] = image;
			});
		document.getElementById("loadingText").remove();
		canvas.width = levelImages[currentFrame].width;
		canvas.height = levelImages[currentFrame].height;
		canvas.tabIndex = 0;
		canvas.focus();
		GameLoop();
		})
		.catch(err =>
		{
			let failedToLoadText = document.createElement("p");
			failedToLoadText.className = "largeText";
			failedToLoadText.textContent = "Failed to load. Try refreshing the website.";
			document.body.insertBefore(failedToLoadText, document.body.firstChild);
			console.log('image failed to load');
		});
}

function DrawPlayerInput(canvas, canvasContext)
{
	DrawImage(canvas, canvasContext, keyboardImages[5], canvas.width * 0.120, canvas.height * 0.0143, 0.5, (lastInput[5]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[7], canvas.width * 0.198, canvas.height * 0.0143, 0.5, (lastInput[7]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[2], canvas.width * 0.434, canvas.height * 0.0143, 0.5, (lastInput[2]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[6], canvas.width * 0.120, canvas.height * 0.0578, 0.5, (lastInput[6]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[4], canvas.width * 0.252, canvas.height * 0.0578, 0.5, (lastInput[4]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[0], canvas.width * 0.404, canvas.height * 0.0578, 0.5, (lastInput[0]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[3], canvas.width * 0.434, canvas.height * 0.0578, 0.5, (lastInput[3]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[1], canvas.width * 0.463, canvas.height * 0.0578, 0.5, (lastInput[1]) ? 1 : 0.4);
}

function DrawCorrectInput(canvas, canvasContext)
{
	DrawImage(canvas, canvasContext, keyboardImages[5], canvas.width * 0.624, canvas.height * 0.0143, 0.5, (correctInputs[currentFrame - 1][5]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[7], canvas.width * 0.702, canvas.height * 0.0143, 0.5, (correctInputs[currentFrame - 1][7]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[2], canvas.width * 0.938, canvas.height * 0.0143, 0.5, (correctInputs[currentFrame - 1][2]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[6], canvas.width * 0.624, canvas.height * 0.0578, 0.5, (correctInputs[currentFrame - 1][6]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[4], canvas.width * 0.756, canvas.height * 0.0578, 0.5, (correctInputs[currentFrame - 1][4]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[0], canvas.width * 0.908, canvas.height * 0.0578, 0.5, (correctInputs[currentFrame - 1][0]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[3], canvas.width * 0.938, canvas.height * 0.0578, 0.5, (correctInputs[currentFrame - 1][3]) ? 1 : 0.4);
	DrawImage(canvas, canvasContext, keyboardImages[1], canvas.width * 0.967, canvas.height * 0.0578, 0.5, (correctInputs[currentFrame - 1][1]) ? 1 : 0.4);
}

function FixInput(input)
{
	let newInput = input;
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
	// doesn't matter what arrow key you use mid-air. comparison inputs presses left
	if(currentFrame > 232)
	{
		if(newInput[0] || newInput[1] || newInput[2] || newInput[3])
		{
			newInput[0] = 1;
			newInput[1] = 0;
			newInput[2] = 0;
			newInput[3] = 0;
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
	let input = [0, 0, 0, 0, 0, 0, 0, 0];
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
	let frame = parseInt(document.getElementById("saveState").value, 10);
	if(Number.isInteger(frame) && frame > 0 && frame <= frames)
	{
		saveState = frame;
		currentFrame = saveState;
		gameState = state.WAITING;
	}
}

function SetFramerate()
{
	let newFps = parseInt(document.getElementById("framerate").value, 10);
	if(Number.isInteger(newFps) && newFps > 0 && newFps <= 60)
	{
	fps = newFps;
	frameLength = 1000 / fps;
	}
}

function PreloadImages(imageFilePaths)
{
	let promises = [];
	for(let i = 0; i < imageFilePaths.length; i++)
	{
		promises.push(new Promise((resolve, reject) =>
		{
			let img = new Image();
			img.src = imageFilePaths[i];
			img.onload = () =>
			{
				imagesLoaded++;
				document.getElementById("loadingText").textContent = "Loading... (" + Math.trunc(imagesLoaded/totalImages*100) + "%" + ")";
				resolve({index: i, image: img});
			}
		img.onerror = reject;
		}));
	}
	return Promise.all(promises);
}

function DrawImage(canvas, ctx, image, x, y, scale = 1, alpha = 1)
{
	if(image === undefined)
	{
		return;
	}
	ctx.globalAlpha = alpha;
        ctx.drawImage(image, x, y, image.width * scale, image.height * scale);
}

function DrawText(canvas, ctx, text, x, y, alpha = 1)
{
	ctx.globalAlpha = alpha;
	ctx.font = '45px Arial';
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
