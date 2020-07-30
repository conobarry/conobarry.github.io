<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Conor Barry - Software Developer</title>
    <!-- Font Awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../styles/global.css" />
</head>

<body>
    <!-- The header of the page. Contains title and the nav bar -->
    <header>
        <?php include 'parts/header.html';?>
    </header>
    <nav>
        <?php include 'parts/nav.html';?>
    </nav>
    <div id="main">
        <!-- The main body of the page -->
        <div class="section" id="section-biography">
            <!-- A section of information -->
            <h3>About</h3>
            <div>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                    far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad
                    Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She
                    packed her seven versalia, put her initial into the belt and made herself on the way. When she
                    reached the first hills of the Italic Mountains, she had a last view back on the skyline of her
                    hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line
                    Lane. Pityful a rethoric question ran over her cheek, then</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                    the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                    language ocean. A small river named Duden flows by their place and supplies it with the necessary
                    regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the
                    far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad
                    Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
            </div>
        </div>
        <div class="section" id="section-projects">
            <h3>Projects</h3>
            <ul class="centered">
                <li>
                    <div class="project left-align">
                        <h4 class="project-title">Budget</h4>
                        <img class="project-img modal" src="../images/budget.png" alt="Budget application screenshot"
                            width="450px" />
                        <div class="project-flex">
                            <p class="project-desc">A budget managing application written in Visual Basic .NET. This is
                                my own personal project that brings together the best of the VB skills I have learned
                                over the course of my placement.</p>
                            <a class="button" href="budget.html">View project</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="project right-align" id="documentation">
                        <h4 class="project-title">Documentation</h4>
                        <img class="project-img modal" src="../images/placeholder.png"
                            alt="Documentation application screenshot" width="450px" />
                        <div class="project-flex">
                            <p class="project-desc">Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts. Separated they live in
                                Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small
                                river named Duden flows by their place and supplies it with the necessary regelialia. It
                                is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                Even the all-powerful Pointing has no control about the blind texts it is an almost
                                unorthographic life One day however a small line of blind text by the name of Lorem
                                Ipsum decided to</p>
                            <a class="button" href="documentation.html">View project</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="project left-align" id="webpage">
                        <h4 class="project-title">Web Page</h4>
                        <img class="project-img modal" src="../images/placeholder.png" alt="Webpage project screenshot"
                            width="450px" />
                        <div class="project-flex">
                            <p class="project-desc">Even the all-powerful Pointing has no control about the blind texts
                                it is an almost unorthographic life One day however a small line of blind text by the
                                name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                            <a class="button" href="webpage.html">View project</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id="image-modal"></div>
    <footer>
        <?php include 'parts/footer.html';?>
    </footer>
</body>

</html>