let quotes =[

{
  "quote": "It's not a very big step from contentment to complacency.",
  "autor":  "Simone de Beauvoir"
},

{
  "quote": "Tis the sunset of life gives me mystical lore, And coming events cast their shadows before.",
  "autor":"Thomas Campbell"
},

{
  "quote":"The more you let yourself go, the less others let you go.",
  "autor": "Friedrich Nietzsche"
},

{
  "quote":"Lack of discipline leads to frustration and self-loathing.",
  "autor": "Marie Chapian"
},

{
  "quote":"There was a young lady named Bright Who could travel much faster than light She started one day In the relative way And came back on the previous night.",
  "autor": "Anonymous"
},

{
  "quote": "There are times I think I am not sure of something which I absolutely know.",
  "autor":"Mongkut, King of Siam"
},

{
  "quote":"Every man's road in life is marked by the graves of his personal likings.",
  "autor":"Alexander Smith"
},

{
  "quote":"If you think you can, you can. And if you think you can't, you're right.",
  "autor":"Mary Kay Ash"
},

{
  "quote":"Be the business never so painful, you may have it done for money.",
  "autor":"Thomas Fuller"
},

{
  "quote": "Money can't buy friends, but you can get a better class of enemy.",
  "autor":  "Spike Milligan"
},




]

const $btn = $('#btn');

$btn.click(function(){

  let number=Math.floor(Math.random()*quotes.length);
  $('#Quote').html('<span>"</span>'+quotes[number].quote + '<span>"</span>' );
  $('#autor').html('<span>--</span>'+quotes[number].autor  );


});
