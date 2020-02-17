/* Rick and Morty quotes in JSON format */
var quoteArr = [
  "You gotta get schwifty. -Rick",
  "He's not pressing charges… That's gotta be the \"you shot me\" equivalent of not being mad. -Rick",
  "Get off the high road Summer. We all got pink eye because you wouldn't stop texting on the toilet. -Rick",
  "I'm not looking for judgement, just a yes or no. Can you assimilate a giraffe? -Rick",
  "Yea… If you spend all day shuffling words around you can make anything sound bad… Morty… -Rick",
  "Like nothing shady ever happened in a fully furnished office? You ever hear about Wall Street, Morty? You know what those guys do in their fancy board rooms? They take their balls and dip 'em in cocaine and wipe 'em all over each other. You know Grandpa goes around and he does his business in public because grandpa isn't shady. -Rick",
  "Yo! What up my glipglops! -Rick",
  "Then it's time to get your beak wet tonight playa! -Rick",
  "Don't break an arm jerking yourself off Morty. -Rick",
  "Me irresponsible? All I wanted was for you to hand me a screwdriver! But instead you had me buckle down and… make you a… roofie… juice serum, so you can roofie that poor girl at your school. W-w-w-w--are you kidding me, Morty?! You're really gonna try to take the high road on this one? Y'know your-you're a little creep, Morty! Your-your-your-you're just a little creepy creep person! -Rick",
  "I don't like it here Morty. I can't abide bureaucracy. I don't like being told where to go and what to do. I consider it a violation. Did you get those seeds all the way up your butt? -Rick",
  'I don\'t think we can perform our new song, "The Recipe For Concentrated Dark Matter" for a crowd this tiny! -Rick',
  "I'll be with Reuben in my workshop while you guys are having another day in Phil Collin's proverbial paradise. -Rick",
  "I'll tell you how I feel about school, Jerry: it's a waste of time. Bunch of people runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece of paper that says you can go take a dump or somethin'. I mean, it's not a place for smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the issue. -Rick",
  "Monument to Compromise. -Rick",
  "I mixed in some Praying Mantis DNA. You know a Praying Mantis is the exact opposite of a Vole, Morty? They mate once and then cut each other's heads off. -Rick",
  "I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. -Rick",
  "I’m sorry, but your opinion means very little to me. –Rick",
  "ISN'T IT OBVIOUS MORTY? I FROZE HIM. -Rick",
  "It's a device Morty, that when you put it in your ear, you can enter people's dreams, Morty. Its just like that movie that you keep crowing about. -Rick",
  "It's a figure of speech, Morty! They're bureaucrats! I don't respect them. Just keep shooting, Morty! You have no idea what prison is like here! -Rick",
  "It's fine, everything is fine. There's an infinite number of realities Morty, and in a few dozens of those I got lucky and turned everything back to normal. -Rick",
  "It's not like we can do this every week, we get 3 or 4 more of these tops -Rick",
  'Listen, Morty, I hate to break it to you but what people call "love" is just a chemical reaction that compels animals to breed. -Rick',
  "Not for the men they cheat on. -Rick",
  "Sometimes science is a lot more art than science. A lot of people don't get that. -Rick",
  "That's right Morty! This is gonna be a lot like that. Except you know. Its gonna make sense. -Rick",
  "There is no god, Summer; gotta rip that band-aid off now, you'll thank me later. -Rick",
  "They'll just fall right out of my ass! I've done this too many times! -Rick",
  "There's not infinite universes left in sync with the show -Rick",
  "They're robots Morty! It's okay to shoot them! They're just robots! -Rick",
  "WUBBA LUBBA DUB DUBS!!! -Rick",
  "Oh, I'm sorry Morty, are you the scientist or are you the kid who wanted to get laid? -Rick",
  "THOSE GUYS ARE INSIDE YOU BUILDING A PIECE OF SHIT, ETHAN!! THEY'RE INSIDE YOU BUILDING A MONUMENT TO COMPROMISE!! fuck them… fuck those people… fuck this whole thing ETHAN. -Rick",
  "This isn't Game of Thrones, Morty -Rick",
  "We don't whitewash it either, Morty. I mean, the pirates are really rapey. -Rick",
  "Well, she's my daughter, Summer. I outrank you. Or, family means nothing, in which case, don't play that card. -Rick",
  "Stay scientific, Jerry. -Rick",
  "Wha, me irresponsible?! All I wanted you to do was to hand me a screwdriver, Morty! -Rick",
  "What about the reality where Hitler cured cancer, Morty? The answer is: Don't think about it. -Rick",
  "What are you looking at, motherfucker! -Rick",
  '"What just happened back there?" -Jerry "Why don\'t you ask the smartest people in the universe, Jerry? Oh yeah, you can\'t. They blew up." -Rick',
  "Whoa, spoilers! I'm a whole season behind. -Rick",
  "Wow I really crononberg'd up the whole place, huh Morty, just a bunch a cronenbergs walkin' around. -Rick",
  "You ask alotta questions Morty, not very charismatic of you. -Rick",
  "You gotta shove these seeds way up your butt Morty, waay up there. -Rick",
  "You have to turn them on Morty! The shoes need to be turned on! -Rick",
  "You know what a vole is, Morty? YOU KNOW WHAT A VOLE IS? -Rick",
  "You're growing up fast, Morty. You're growing into a great big thorn straight into my ass… -Rick",
  "You're our boy dog, don't even trip. -Rick",
  "You're young, you have your whole life ahead of you, and your anal cavity is still taut yet malleable. -Rick",
  "You're not gonna believe this, because it usually never happens, but I made a mistake. -Rick",
  "Oh, I say good sir, oh harumph, ohh a bope-a-dope-o-bobo. -Rick",
  "Do you know how many characters there are in 'The Simpsons', Morty? There's like a-a BILLION CHARACTERS, M-Morty. There was an episode where former President BUSH was their neighbor! -Rick",
  "GRAAAAAASSSSSSS… tastes bad. -Rick",
  "Wubbalubbadubdub! -Rick",
  "What is this, 90's Conan? -Rick",
  "Lick, lickity, lick my balls! -Rick",
  "Are you listening to me, Morty? Homework is stupid. The whole point is to get less of it. -Rick",
  "Don't be a baby! You avoid getting shot in real life all the time, Morty. Just do the same thing here, and we'll be fine! - Rick",
  "He's not a hot girl. He can't just bail on his life and set up shop in someone else's. -Beth",
  "Five more minutes of this and I'm going to get mad! -Goldenfold",
  '"Why would I negotiate with you?!" -Goldenfold "Because we are both rational adults who don\'t want anything bad to happen. And because I have a human shield." -Rick',
  "…not MY fault this is happening. -Goldenfold",
  "You know my name, that's disarming. -Goldenfold",
  "Nothing to read into there! -Goldenfold",
  "Oh my god, how could I not see this coming? My lust, *sob* my greed! I deserve thiiiiii- (Rick cures him) Ladies, let's get out of here. I haven't learned a thiiiiiing! -Goldenfold",
  "Life is effort and I'll stop when I die! -Jerry",
  "Hmmm… human music. -Jerry",
  "God? God's turning people into insect monsters Beth. I'm the one beating them to death. Thank me. -Jerry",
  "I don't get it and I don't need to. -Jerry",
  '"I wish that shotgun was my penis." -Jerry "If it was, you could call me Ernest Hemingway." -Beth',
  "So women like confidence… How convenient… -Jerry",
  "I'm Mr. Crowbar, and here is my friend, who is also a crowbar! -Jerry",
  "Nobody's killing me until after I catch my wife with another man. -Jerry",
  "Well look where being smart got you. -Jerry",
  "If I've learned one thing, it's that before you get anywhere in life, you gotta stop listening to yourself. -Jerry",
  "It probably has Space AIDS -Jerry",
  "Did you just come in through a portal?",
  "HI! I'M MR MEESEEKS! LOOK AT ME!",
  "Existence is pain to a Meeseeks, Jerry, and we will do anything to alleviate that pain.",
  "I JUST WANNA DIE!",
  "I'm a bit of a stickler Meeseeks, what about your short game?",
  "Meeseeks don't usually have to exist for this long. It's gettin' weeeiiird…",
  "Meeseeks were not born into this world fumbling for meaning, Jerry!",
  "Ooohhh can do!",
  "We ALL wanna die, we're Meeseeks!",
  "We are created to serve a singular purpose, for which we will go to any lengths to fulfill!",
  "Your failures are your own, old man! I say, FOLLOW THROOOOUGH!",
  "Well then get your shit together. Get it all together and put it in a backpack, all your shit, so it's together… And if you gotta take it somewhere, take it somewhere, ya know? Take it to the shit store and sell it, or put it in a shit museum. I don't care what you do, you just gotta get it together… Get your shit together. -Morty",
  "Don't be trippin' dawg, we got you -Morty",
  "Don't even trip about your pants, dawg. We got an extra pair right here. -Morty",
  "Are you kidding? I'm hoping I can get to both of them, Rick! -Morty",
  '"I just killed my family! I don\'t care who they were!" -Morty "I dunno, some people would pay top dollar for that kind of breakthrough." -Rick',
  "Why are you doing this bit? We're gonna die. -Morty",
  "You're like Hitler, except… Hitler cared about Germany, or something -Morty",
  "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV? -Morty",
  "This is Principal Vagina. No relation.",
  "Principal Vagina here, don't let the name fool you; I'm very much in charge. Reminding you that tonight is our annual Flu Season Dance. I don't know how many times I have to say this, but if you have the flu, stay home. The Flu Season Dance is about awareness, not celebration. You don't bring dead babies to Passover.",
  "Hello Jerry, come to rub my face in urine again? -Snowball",
  "Snuffles was my slave name, you can call me Snowball because my fur is pretty and white.",
  '"Where are my testicles, Summer?" -Snowball "Oh, wow. That\'s an intense line of questioning, Snuffles" -Summer',
  "Snuffles wants to be understood. Snuffles needs to be understood.",
  "Ew, Grandpa, so gross! You're talking about my Mom! -Summer",
  "God, Grandpa, you're such a dick. -Summer",
  "Go home and drink, Grandpa. -Summer",
  "I'm the Devil, what should I do when I fail? Give myself an ice cream?",
  "Alien Invasion Tomato Monster Mexican Armada Brothers Who Are Just Regular Brothers Running In A Van From An Asteroid And All Sorts Of Things: The Movie",
  "And now, human music. boop beep boop… boop beep boop…",
  "I am Mr. Booby Buyer. I'll buy those boobies for 25 schmeckles!",
  "Prepare to be emancipated from your own inferior genes!",
  "Fuck you god. Not today, bitch! -Rick",
  "Oh boy, here I go killing again. -Krombopulos Michael",
  'I like this name "Fart"',
  "So everyone's supposed to sleep every single night now? You realize night time makes up half of all time? -Rick",
  "Always check out distress beacons. 9 times out of 10 it's a ship full if dead aliens and a bunch of free shiiiit!",
  "Is he keeping his shoulders straight? Ohhh he's trying!",
  "Which part of 'Blackout' don't you understand? I thought you drank.",
  "I think I'm certain that we are f'd in the A.",
  "Sum-Sum, let’s go! Grandpa’s concern for your safety is fleeting!",
  "Let’s be post-apocalyptic scavenger-[belch]-errrrsss!",
  "❝My body is chrome! My blood is gasoline!❞ ❝Nope, regular blood.❞",
  "That's a confetti gun you fucking idiot",
  "Being nice is something dumb people do in order to hedge their bets.",
  "It's the hardest working liver in the Galaxy, Morty, and now it has a hole in it."
];


// Audio for wubba lubba dub dub sound
let wubbaSound = document.createElement("audio");
wubbaSound.setAttribute("src", "wubba.wav");

// Audio for ooowee sound
let ooooweeSound = document.createElement("audio");
ooooweeSound.setAttribute("src", "owee.wav");

/* Click function for wubba lubba dub dub noise */
$("#WUBBA").click(function() {
  $(wubbaSound).trigger("play");
});

/* Click function for oooowee noise */
$("#OOOOWEEE").click(function() {
  $(ooooweeSound).trigger("play");
});

/* Click function to give user new random quote */
$("#newQuote").click(function() {
  let x = Math.floor(Math.random() * quoteArr.length);
  $("#quote").text(quoteArr[x]);
});


