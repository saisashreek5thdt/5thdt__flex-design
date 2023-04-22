const description = [{
    id: 1,
    title: "Not Yet",
    author: "(Lisa Cox, Lori Hockema)",
    story: "A little girl, Lorisa, faces the challenges of her day with her younger brother looking up to her and her dog, Doodle, by her side. She demonstrates for our readers what a growth mindset looks like. She has big dreams and an attitude of positive thinking that is going to take her into the future with all kinds of possibilities.",
    imagesrc: "../assets/images/reading-activity/not-yet.jpg"
}, {
    id: 2,
    title: "Beautiful oops !",
    author: "(Barney saltzberg)",
    story: "A life lesson that all parents want their children to learn: It’s OK to make a mistake. In fact, hooray for mistakes! A mistake is an adventure in creativity, a portal of discovery. A spill doesn’t ruin a drawing—not when it becomes the shape of a goofy animal. And an accidental tear in your paper? Don’t be upset about it when you can turn it into the roaring mouth of an alligator.",
    imagesrc: "../assets/images/reading-activity/oops.jpg"
}, {
    id: 3,
    title: "Giraffe can't dance",
    author: "(Giles andreae)",
    story: "Giraffes Can't Dance is a touching tale of Gerald the giraffe, who wants nothing more than to dance. With crooked knees and thin legs, it's harder for a giraffe than you would think. Gerald is finally able to dance to his own tune when he gets some encouraging words from an unlikely friend.With light-footed rhymes and high-stepping illustrations, this tale is gentle inspiration for every child with dreams of greatness.",
    imagesrc: "../assets/images/reading-activity/giraffe1.jpg"
}, {
    id: 4,
    title: "The Girl Who Never Made Mistakes",
    author: "(Markpet)",
    story: "Beatrice Bottomwell has NEVER (not once!) made a mistake. She never forgets her math homework, she never wears mismatched socks, and she ALWAYS wins the yearly talent show at school. In fact, the entire town calls her The Girl Who Never Makes Mistakes!One day,the inevitable happens: Beatrice makes a huge mistake in front of everyone!But in the end,readers(and perfectionists) will realize that life is more fun when you enjoy everything— even the mistakes.",
    imagesrc: " ../assets/images/reading-activity/girl.jpg"
}, {
    id: 5,
    title: "Mindset Matters",
    author: "(Lisa Griffin)",
    story: "Amelia is her name and conquering new challenges is her game! She 's an up-for-any-adventure second-grader who's eager to try new things,provided nothing can go wrong.She takes up skateboarding with gusto and feverishly builds a swingset for her kid brother.But at the first sign of trouble - tumbling off her skateboard and whacking her thumb with a hammer - she 's done.",
    imagesrc: " ../assets/images/reading-activity/mindset.jpg "
}, {
    id: 6,
    title: "Fantastic Elastic Brain",
    author: "(Sarah Ackerley)",
    story: "Did you know you can stretch and grow your own brain? Or that making mistakes is one of the best ways your brain learns? Awarded as one of the best growth mindset books for kids, Your Fantastic Elastic Brain: Stretch It, Shape It teaches all the ways that the brain can develop with exercise, just like the rest of our bodies.",
    imagesrc: " ../assets/images/reading-activity/brain.jpg "
}, {
    id: 7,
    title: "The Most Magnificient Thing",
    author: "(Ashley Spires)",
    story: "Award-winning author and illustrator Ashley Spires has created a charming picture book about an unnamed girl and her very best friend, who happens to be a dog. The girl has a wonderful idea. “She is going to make the most MAGNIFICENT thing! She knows just how it will look. She knows just how it will work. All she has to do is make it, and she makes things all the time.",
    imagesrc: " ../assets/images/reading-activity/magnificient.jpg"
}]

function show(id) {
    for (let i = 0; i < description.length; i++) {
        if (id == description[i].id) {
            document.getElementById("book-title").innerText = description[i].title;
            document.getElementsByClassName("btn-info")[0].style.display = "block";
            document.getElementById("book-author").innerText = description[i].author;
            document.getElementById("book-story").innerText = description[i].story;
            document.getElementById("book-image").src = description[i].imagesrc;
            document.getElementById("book-image").style.filter = " drop-shadow(0px 1px 2px rgb(81, 79, 79))";
        }
    }
}

function expand() {
    document.getElementById("slide-bar").style.display = "block";
}

function hide() {
    document.getElementById("slide-bar").style.display = "none"
}