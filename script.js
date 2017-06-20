// smooth scroll when anchor link clicked
var link = document.getElementsByClassName("navLink");

for(var i = 0; i < link.length; i ++){
	link[i].addEventListener('click', function(e){
		return handleClick(e);
	})
}

var handleClick = function(e){

	if(e.path[1].hash){

		e.preventDefault();

		var hash = document.getElementById(e.path[1].hash.slice(1));

		hash.focus();

		hash.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
}


// create modal for contact
var modal = new VanillaModal.default({
	clickOutside: true,
});

var insertTo = document.getElementById('content');

var createInterview = function(name, array){
	var content = document.createElement('div');
	var interview = document.createElement('div');
	interview.classList.add('interview');
	
	var image = document.createElement('img');
	image.setAttribute('src', './assets/images/'+name+'.jpg');

	for(var i = 0; i < array.length; i++){
		(i % 2) == 0 ? makeQuestion(array[i], interview) : makeAnswer(array[i], interview)
	}

	content.insertAdjacentElement('beforeend', interview);
	content.insertAdjacentElement('beforeend', image);

	content.setAttribute('id', name);
	content.classList.add('vanilla-modal', 'modal-hider');

	insertTo.insertBefore(content, insertTo.firstChild);
};

var makeQuestion = function(string, element){
	element.insertAdjacentHTML('beforeend', 
		'<p class="question">'+string+'</p>');
};

var makeAnswer = function(string, element){
	element.insertAdjacentHTML('beforeend', 
		'<p class="answer">'+string+'</p>');
};


/*  --------------------------------------------
------  Ronnie ---------------------- */
createInterview('Ronnie', [
	'What is your hometown?',
	'Memphis, TN',
	'If you could move to another city, would you?',
	'Nope.',
	'What neighborhood do you live in?',
	'Frayser',
	'How long have you lived in Memphis? ',
	'All my life. I really enjoy this. Nice city.',
	'How would you describe the City of Memphis in three words? ',
	'Peaceful, diverse, and beautiful',
	'What was your childhood in Memphis like? ',
	'I growed up in the neighborhood. It was nice. 8 kids, 2 parents. Growed up in a single-family home. Came out pretty good.',
	'What is your current impression of Memphis? ',
	'Memphis is a lovely city. A lot going on. Pro basketball now for the city. Football team doing pretty good. So for a city it is really nice. It is a good city.',
	'Do you feel Memphis has improved while you have lived here? ',
	'Oh yes, it has improved a whole lot since my childhood. Folks have come together now. There are more nicer folks now. More peaceful now. Folks talk to each other now. It is good.',
	'What is your funniest story about living in Memphis? ',
	'Hmm, just seeing the peoples face. Seeing the smiles on peoples faces everyday. How folks talk, how folks speak. The atmosphere. That is what it is all about, smiling.',
	'If you could change something about Memphis, what would it be? ',
	'Crime.',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'That I am a good person. I respect everybody. I treated everybody right.  And hopefully I did a good thing while I was here.',
	'What is your favorite thing about Memphis? ',
	'The peoples.  That’s the thing. That’s what makes Memphis great. The peoples.'
]);

/* ---------------------------------------------------
----- Ted ------------------ */
createInterview('Ted', [
	'What is your hometown?',
	'Knoxville, Tennessee',
	'If you could move to another city, would you?',
	'No',
	'What neighborhood do you live in?',
	'Central Gardens',
	'How long have you lived in Memphis? ',
	'Since 1992.',
	'How would you describe the City of Memphis in three words? ',
	'Inviting, relaxing, and marvelous.',
	'What were your first impressions of Memphis? ',
	'My first impression was it was just amazing.  When I first came to Rhodes as a prospective student it was St. Patrick’s Day and I remember standing in Overton Square with it being blocked off from Huey’s east through the square and I just thought where I grew up in Knoxville Tennessee there is not a setting like this in my first eighteen years there and I had just been to Memphis for one day and thought this is great. This would have been in 1985. ',
	'What is your current impression of Memphis? ',
	'Our City has some issues but some issues that not every big city has. If you are going to live in a metropolitan area, a top 25 city, you are going to have some crime but so much about Memphis’s history is written about the color of people’s skin and race I just wish that that would erode and go away.  And we would build the future of the City on what is positive and happening now. I take such pride; I look at Crosstown  and I see what is going in there and that building was vacant when I came to Rhodes. When you think of a building being vacant for thirty years and then takes the interest to put businesses in and the YMCA and apartments I think it is just going to be another center for people to congregate and every business will be there reacting and supporting the others.  That is what our City needs.',
	'Do you feel Memphis has improved while you have lived here? ',
	'Yes! In lots of ways. When I came to Memphis 35 years ago I think we have improved in regards to neighborhoods, people looking out for their neighbor and not living in a kind of backyard community. People live in their front yards, they’re visible to their neighbor, they’re helping whether its mowing their grass or helping them cut down some limbs. I just think there is more of a community in one’s neighborhood that there may not have been.  I think most are now.',
	'What is your funniest story about living in Memphis? ',
	'When I first came to Rhodes it was something like the feeling of going from middle school to high school.  There were these urban legends; when I was an eight-grader there was an urban legend that there was a smoking pit behind my classroom that underclassmen were thrown into it and beaten up before I went to high school.  So there were some nerves. When I left Knoxville Tennessee , a city of two hundred thousand to move to Memphis, a city which was obviously the largest metropolitan area in Tennessee, you know Rhodes is an urban campus so one of my first weeks on campus the closest place off campus to cash a check or get soda or a beer, it is an Exxon now but it used to be a 7-11. And I can remember stories of freshman at Rhodes going to the 7-11 and people coming up to them and asking if they wanted to buy this VCR. It would be a VCR box and one of my classmates was offered a VCR for $15 or $20 and they bought this VCR and they get it home and it was just a box of rocks. And that was my first impression of Memphis was that I was just too naïve to leave the walls of Rhodes College because it was a metropolitan city. Whenever I am approached by someone, which happens very often in the City, asking for money or trying to sell you something, you know you have to have city wits to live in the area. ',
	'If you could change something about Memphis, what would it be? ',
	'Well both of my daughters went to private schools. So if there is anything I can change about Memphis , but the stereotype when people come to Memphis is that they are told immediately that they not need to live in the inner city and that they need to join the white flight into Germantown or Collierville and they are told that our school system sucks. But I hear great stories about White Station. And when you consider the cost of private schools for fifteen years that is an extreme burden on the middle class that you have no viable public school options. So if I could change something about Memphis, and bring three hundred thousand dollars back to my wallet I would make the public schools in Memphis like the public school available in other communities. ',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'I would like for them to know that I was a proud Memphian and that I would do anything to look after and protect my neighbor and an honest and sincere person who would do anything for my neighbor and friend.',
	'What is your favorite thing about Memphis? ',
	'I love the food!  I love Memphis food.  When I used to live in Greensboro, North Carolina I daydreamed about a Huey’s hamburger or a Rendezvous rib or a Gibson’s doughnut or a Gus’s fried chicken. I just think that Memphis has the most incredible food from places that are total hole in the walls to best dining.  My fiancé’s friends, when they come from New York they go to Tsunami and they think Tsunami is one of the best restaurants in the country. My favorite things about Memphis are the people and the places I can eat.'
]);

createInterview('Febles', [
	'What is your hometown?',
	'Merida, Yucatan, Mexico',
	'If you could move to another city, would you?',
	'At this point, I would not consider it.',
	'What neighborhood do you live in?',
	'East Memphis',
	'How long have you lived in Memphis? ',
	'3 or 4 years',
	'How would you describe the City of Memphis in three words? ',
	'Vibrant, diverse,  unique',
	'What were your first impressions of Memphis? ',
	'I was told about Memphis.  I never settle for what someone told me. I was told that Memphis was a criminal city, a dirty city, and it was a very bad city. SO I started studying about its uniqueness.  It was fascinating the way in which the city was built.  It has so much history and diversity and it is beautiful. ',
	'What is your current impression of Memphis? ',
	'This is the land of opportunity.  You can meet people who have completely nothing in common who live near each other. I think that is fascinating. Because they do not cross paths. ',
	'Do you feel Memphis has improved while you have lived here? ',
	'Definitely. No doubt.  I have seen people merging more. Caring more.  I have noticed a sense of identity with this whole 901 movement.  You choose to stay in Memphis.  There are a lot of people that I know who chose to stay in this area.',
	'What is your funniest story about living in Memphis? ',
	'OK, funny?  If you like tragedy, that would be funny.  I had a car accident and afterwards I had to get downtown. I didn’t have any money because I had lost my purse. The only thing that I had was my cell phone. So I had to be downtown by 8am, I literally had just a few coins left in my house. So I had to walk a couple of miles to get access to my money but I couldn’t because I didn’t have any ID. But I noticed that a bus was passing in front of Walgreen’s. But I didn’t know how to use it.  The bank guard was super kind and he gave me a little money for the bus.  I had to ask people to help but I got on the bus.  But that day was funny and tragic because all these people helped me.  And someone gave me a free ticket. So I did spend the money and gave the ticket to a lady who had a baby so she could get on the bus.  So it all worked beautifully.  I don’t know if it is a funny story but I can tell you that I truly enjoyed it and enjoyed the ride. So all the things that people had told to me that Memphis was horrible and people are dangerous, but it all was quite beautiful.  And I thought it was funny that I had to walk in the rain, ask people for money, and it all worked out.',
	'If you could change something about Memphis, what would it be? ',
	'I would make people appreciate where they live. Take pride in that.  This is my city. For one way or another we are here, so let’s try to make it a better place.',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'What would you like someone twenty years from now who reads this to know about you? That I never gave up.  No matter what.  You can make this world a better place if you just keep on doing.  Never give up.',
	'What is your favorite thing about Memphis? ',
	'The way I feel about it. I feel at home.  I feel safe here. Which is weird because everyone else feels different.  I feel that I have made a home out of a completely foreign land. I just feel embraced and appreciated and loved and I am very grateful for that.'
]);

createInterview('Kandra', [
	'What is your hometown?',
	'West Brach, Iowa.  A very small town.',
	'If you could move to another city, would you?',
	'If I didn’t have any entanglements, yes. ',
	'What city?',
	'I loved my time in Spain. I have also been very interested in Belize and Costa Rica just because of the difference in culture and difference in priorities that people have.  And I love the climate; that Cost Rica has 3 of the 5 biomes in that tine county. Maybe somewhere far away where I could experience something completely different.',
	'What neighborhood do you live in?',
	'Central Gardens',
	'How long have you lived in Memphis? ',
	'20 years.',
	'How would you describe the City of Memphis in three words? ',
	'Progressing, tough, and BBQ',
	'What were your first impressions of Memphis? ',
	'When we visited to move here someone said it was like a big country town. So when we drove down Union,  and the streets were so wide. It was not like Chicago. There was a certain amount of space that I wasn’t used to in a city .  I was really surprised by the amount of trees. But also seeing the run-down aspects of it because we stayed  on Union and we went by Overton Square and it was crazy and very run-down. And we ended up moving like two blocks away. So my first impressions were that it needed some love. But also there was a diversity … there was just something interesting about it. Something that draws you in.  It is friendly yet very clearly not perfect but you kind of love it because it is not perfect.',
	'What is your current impression of Memphis? ',
	'I see us becoming  more progressing. People are more aware environmentally, people are trying to promote it. That is a big difference because when I first moved here everybody that lived here put down Memphis. And now, especially in the last ten years, with the Grizzlies, and people thought that would never work, then Overton Square, and the City putting money into areas where people are starting to take pride in the City and pushing the City to be more progressive.  But right now I love it because it is offering a lot that it didn’t offer even ten years ago.',
	'Do you feel Memphis has improved while you have lived here? ',
	'Tremendously ',
	'What is your funniest story about living in Memphis? ',
	'When we first came here we visited Graceland because, you know, because it is what you do. And I grew up with Elvis, my Mom played a lot of Elvis. But I think it was when I found that they celebrate Elvis birth week and Elvis death week were these huge, and we were celebrating him dying. We have the January and the August; the death and the life and how seriously people take it with the candlelight vigil. I find it very charming. I don’t find it embarrassingly funny , I find it a charming thing.',
	'If you could change something about Memphis, what would it be? ',
	'I would like to see develop in the areas that really need it. As much as I love the kind of money the City has thrown into like uptown and downtown and Overton Square, just the amount of poverty here is frightening. So for me it would be a way to create some balance to where it is not the haves and have-nots so much because that is a huge problem for Memphis.',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'Being from Iowa, from the north, the South always held a certain lore for me. Something about the southern belle, the southern drawl, the food, the pace, there were lots of things that held a certain lore that moving here and seeing the reality of life here, it is different being a northerner and now being a southerner  has changed my perspective. I am raising southerners. SO my views on what it was before and what it actually is , it has sort of exceeded my expectations because we have come so far. So something about me is that you can be from somewhere and do a 180 in your life and really benefit greatly from it and for me that was a very positive thing.',
	'What is your favorite thing about Memphis? ',
	'The people.  I’ve met a lot of very interesting people and being an instructor at the Kroc has allowed me to meet people I would never meet  because it is a real community. Socially integrated which is what they wanted when they created it.  So I would never have been able to meet them and yet we all get on well. I think people have become friends that I would never have known before. There are just a lot of really wonderful people in the world and in Memphis I seem to have found a lot of them.'
]);

createInterview('Linley', [
	'What is your hometown?',
	'Memphis',
	'If you could move to another city, would you?',
	'Another city would have to offer an awful lot.  It would have to be a very historic place. ',
	'If so, what city?',
	'Portland, OR. Two of my friends moved there and said it was like Cooper-Young, but the whole place.',
	'What neighborhood do you live in?',
	'Cooper Young',
	'How long have you lived in Memphis? ',
	'My whole life.',
	'How would you describe the City of Memphis in three words? ',
	'Gritty, Creative , but most of all, cool.',
	'What was your childhood in Memphis like?',
	'I didn’t have that many friends, so I was lonely. I grew up in Binghampton. But before Binghampton was a cool place. So it was pretty working class, but lots of walking around and riding bikes. Mom giving me $2 and my sister and I walking to the convenience store on Poplar and buying a whole bag full of candy. And going sometimes to the jazz festival downtown.  I remember seeing Rufus Thomas playing with his shorts and platform shoes and all that. ',
	'What is your current impression of Memphis? ',
	'Its got grit. It certainly is not perfect, but we are not all in denial of the problems.  We embrace the problems along with the good and say ”that is so Memphis.” So I think we are at the point where  we are really seeing the things that we could and should do to help lift everyone up because that is going to make the City even better.  We are a strong city but people don’t know that.  We are the underdog and those of us who root for underdogs have always rooted for it.',
	'Do you feel Memphis has improved while you have lived here? ',
	'Oh, greatly.  Yes.',
	'What is your funniest story about living in Memphis? ',
	'I used to work at Elmwood cemetery and one day, the gold cart that my friend Jodie and I were driving, blew up. The battery overheated, caught fire, and blew up. We noticed the seat was getting very hot and smelled smoke.  We ran for help and while asking someone to borrow their cell phone, the golf cart blew up. Fortunately nobody was hurt.',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'I have always been a cheerleader for this city. I have always tried to work in the most interesting places here.  Which to me are those places that really embody and communicate the history of Memphis because the history of Memphis is much more interesting than people give it credit for.  And I think a lot of people somehow see Memphis as being devoid of history. Memphis has an incredibly interesting history.  Or they just pick out the bad parts. And so I have always been drawn to working at these places to really try to bring the history of Memphis alive for people so they feel that they actually do have a connection to it. So I think a lot of people in Memphis see themselves as having a limited connection to it. And it is because so many people don’t know how they fit into it.  And I think it is a lot less true now than it used to be.',
	'What is your favorite thing about Memphis? ',
	'Midtown.  I love that I go out places and see people I know. '
]);

createInterview('Golightly', [
	'What is your hometown?',
	'Mobile, AL',
	'If you could move to another city, would you?',
	'Probably but would want to go somewhere internationally.',
	'If so, what city?',
	'No place in particular.',
	'What neighborhood do you live in?',
	'Cooper Young',
	'How long have you lived in Memphis? ',
	'Since 1987.',
	'How would you describe the City of Memphis in three words? ',
	'Southern Grit Special I like the whole idea of the southern grits and the grit, and it’s like the special of the day.',
	'What were your first impressions of Memphis? ',
	'Moved from Nashville on my own to go to Rhodes. Went for a bike ride to ride down to the river and ended up on Lamar and I thought I was about to be killed. So I rode down to the river and watched the sunset and thought this is amazing. But the ride back was scary.  So I learned from that experience that Memphis is really divided and that you had to be careful in some of them. And they were right next to each other.',
	'What is your current impression of Memphis? ',
	'Now that all seems like old hat. I try to be careful of my surroundings but I feel really safe here.  Most of the time. I have learned about the culture, the music, all the weird people that live here, so I have figured out that Memphis is slow enough that if you want to do something innovative, nobody is doing that here yet.  So if you want to shine in an area, it is easy to find an area that nobody is doing anything in. Even if it is baking rosemary cookies with caramel icing. Nobody is doing that here. And it is super cheap to live here.',
	'Do you feel Memphis has improved while you have lived here? ',
	'Oh, dramatically. I have been lucky enough to have lived here long enough to have been involved in all sorts of ways in the community. I’ve seen out east grow, education, public art, all different ways. I saw the square be great, have its demise, and then come back again.',
	'What is your funniest story about living in Memphis? ',
	'I used to work at Sun Studio as an intern and asked me to re-write their tour. I didn’t know anything about Memphis music.  There was a guy named Gary Hardy who was the owner at the time. And there was a sound engineer there named James who helped me write the tour.  So now they told me that I had to give the tour like eight times a day. That totally sucked, but the great thing about it was that these stars would come in and record there.  One day Matt Dillon came in and was very kind and agreed to pose for a picture with me.  So we were standing at the front of the store and I had my hand on the door frame and my boss came bursting in and slammed the door on my fingers. I screams and was completely appalled and embarrassed.  And cried, and then I quit. He rehired me back but I warned him that he could never do that again.',
	'If you could change something about Memphis, what would it be? ',
	'I would change the crime.  Because I would like to feel safer.',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'? I would like them to know that I am the mother of three kids.  That I direct two non-profits that I am really proud of. Memphis Reads which is a community reads project where once a year we have everyone read the book and then we have the author come to town to talk to the community and the other is Paint Memphis which is an organization which is trying to create community one wall at a time.  It is like my dream come true.  It is not painless and a lot of hard work, but the artwork will still be there and will hopefully change the face of Memphis. I want Memphis to be a destination for people to come. ',
	'What is your favorite thing about Memphis? ',
	'Maybe those Makedas cookies? Or the people.  I have made so many friends. And the grittiness.  It is not gentile but also with that southern hospitality. And if you could put that in a cookie it would be Makeda’s cookies.'
]);



// createInterview('Hutcheson', [
// ]);

// createInterview('Front', [
// ]);

/* template
	'What is your hometown?',
	'If you could move to another city, would you?',
	'What neighborhood do you live in?',
	'How long have you lived in Memphis? ',
	'How would you describe the City of Memphis in three words? ',
	'What were your first impressions of Memphis? ',
	'What is your current impression of Memphis? ',
	'Do you feel Memphis has improved while you have lived here? ',
	'What is your funniest story about living in Memphis? ',
	'If you could change something about Memphis, what would it be? ',
	'This web site only captures a snapshot in time.  What would you like someone twenty years from now who reads this to know about you? ',
	'What is your favorite thing about Memphis? '
*/




