var questions = [
   {
       question: "WHEN WAS THE PILOT EPISODE OF RICK AND MORTY AIRED?",
       options: {
           a: "January, 9, 2020",
           b: "December 2, 2013",
           c: "hasnt came out yet",
           d: "this friday"
       },
       answer: 'b'
   },
   {
    question: "WHAT IS THE NAME OF THE GADGET THAT RICK USES TO TRAVEL BETWEEN DIMENSIONS AND UNIVERSES?",
    options: {
        a: "nicole",
        b: "sun",
        c: "Portal Gun.",
        d: "lenten"
    },
    answer: 'c'
    },
    {
        question: "WHAT IS ‘SCHMECKLE’?",
        options: {
            a: "ketchup",
            b: "December 2, 2013",
            c: "Portal Gun.",
            d: "A currency."
        },
        answer: 'd'
    },
    {
            question:"WHAT IS THE NAME OF THE BOOK MORTY JR. WRITES?",
            options: {
                a:"My Horrible Father",
                b: "Morty diary",
                c:"candy land",
                d:"i had a nightmare"
            },
            answer: 'a'
    },
    {
            question: "WHAT IS BETH’S JOB?",
            options: {
                a: "horse suregon",
                b: "clown",
                c: "teacher",
                d: "house wife"
            },
            answer: 'a'
        
    }
]

var results = {}
var correct = 0;
var incorrect = 0;

function displayQuestions(arr){
    for(var i = 0; i < arr.length; i ++ ){
        $('#questions').append('<div class="question">' + arr[i].question + '</div>')
        $('#questions').append('<div data-value="a" data-number='+ i +' class="option">' + arr[i].options.a + '</div>')
        $('#questions').append('<div data-value="b" data-number='+ i +'  class="option">' + arr[i].options.b + '</div>')
        $('#questions').append('<div data-value="c"  data-number='+ i +' class="option">' + arr[i].options.c + '</div>')
        $('#questions').append('<div data-value="d"  data-number='+ i +' class="option">' + arr[i].options.d + '</div>')
    }

    $('.option').on('click', function(){
       var value = $(this).attr('data-value')
       var number = $(this).attr('data-number')
       results[number] = value
       console.log( results)
    })
}

displayQuestions(questions);





$('#submit').on('click', function(){
    for(var i = 0; i < questions.length; i ++ ){
        if(questions[i].answer == results[i]){
            correct++
        }else{
            incorrect++
        }
    }
    $('#questions').html('<div> YOU HAD THIS MANY CORRECT!  '+ correct+ ' </div>')
    
    console.log('YOU HAD THIS MANY CORRECT : ' + correct);
   
})