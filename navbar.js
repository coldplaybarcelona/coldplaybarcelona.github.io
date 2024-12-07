// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="logo.png" alt="Logo" class="logo-size">
                    Musical Arts Research</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="./index.html"><i class="fas fa-home me-2"></i>Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="videosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-video me-2"></i>Videos</a>
                            <ul class="dropdown-menu" aria-labelledby="videosDropdown">
                                <li><a class="dropdown-item" href="./videosa/"><i class="fas fa-terminal me-2"></i>Technology and Engineering</a></li>
                                <li><a class="dropdown-item" href="./videosb/"><i class="fas fa-laptop-code me-2"></i>Coding</a></li>
                                <li><a class="dropdown-item" href="./videosr"><i class="fab fa-python me-2"></i>Robotics</a></li>
                                <li><a class="dropdown-item" href="./videosd"><i class="fab fa-reddit-square me-2"></i>Digitalization</a></li>
                                <li><a class="dropdown-item" href="./videosp"><i class="fa-solid fa-diagram-project me-2"></i>Projects</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-flask me-2"></i>Projects</a>
                            <ul class="dropdown-menu" aria-labelledby="projectsDropdown">
                                <li><a class="dropdown-item" href="./svgvisualizer"><i class="fas fa-star me-2"></i>Simple shape Audio Visualizer</a></li>
                                <li><a class="dropdown-item" href="./audio2"><i class="fas fa-mercury me-2"></i>Coldplay Audio Visualizer</a></li>
                                <li><a class="dropdown-item" href="./audio"><i class="fas fa-lightbulb me-2"></i>Audio Visualizer 1</a></li>
                                <li><a class="dropdown-item" href="./drawshapes"><i class="fas fa-shapes me-2"></i>Audio Visualizer 2</a></li>
                                <li><a class="dropdown-item" href="./changes"><i class="fab fa-python me-2"></i>Song visualizer</a></li>
                                <li><a class="dropdown-item" href="./rainbow"><i class="fa-solid fa-rainbow me-2"></i>Rainbow audio</a></li>
                                <li><a class="dropdown-item" href="./fractalvisualizer"><i class="fa-solid fa-image me-2"></i>Fractal Visualizer 1</a></li>
                                <li><a class="dropdown-item" href="./fractal"><i class="fa-solid fa-tree me-2"></i>Fractal Visualizer 2</a></li>
                                <li><a class="dropdown-item" href="./buddhabrot"><i class="fa-solid fa-vihara me-2"></i>Buddhabrot Visualizer</a></li>
                                <li><a class="dropdown-item" href="./dejongaudio"><i class="fa-solid fa-dharmachakra me-2"></i>De Jong Visualizer</a></li>
                                <li><a class="dropdown-item" href="./fireworks"><i class="fa-solid fa-music me-2"></i>Fireworks Visualizer 1</a></li>
                                <li><a class="dropdown-item" href="./fireworks2"><i class="fa-solid fa-fire me-2"></i>Fireworks Visualizer 2</a></li>
                                <li><a class="dropdown-item" href="./puzzle"><i class="fa-solid fa-puzzle-piece"></i>Our song puzzle</a></li>
                                <li><a class="dropdown-item" href="./mic"><i class="fa-solid fa-microphone me-2"></i>Microphone Visualizer</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="toolsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-tools me-2"></i>Tools</a>
                            <ul class="dropdown-menu" aria-labelledby="toolsDropdown">
                                <li><a class="dropdown-item" href="./musiccolor"><i class="fa-solid fa-palette me-2"></i>Colour & music</a></li>
                                <li><a class="dropdown-item" href="./piano"><i class="fa-solid fa-keyboard me-2"></i>Piano & colour</a></li>
                                <li><a class="dropdown-item" href="./svg"><i class="fa-regular fa-image me-2"></i>SVG & music</a></li>
                                <li><a class="dropdown-item" href="./buddhabrotaudio"><i class="fa-solid fa-vihara me-2"></i>Buddhabrot</a></li>
                                <li><a class="dropdown-item" href="./dejong"><i class="fa-solid fa-dharmachakra me-2"></i>De Jong Attractors</a></li>
                                <li><a class="dropdown-item" href="./svgeditor1"><i class="fas fa-diagram-project me-2"></i>SVG Path Generator</a></li>
                                <li><a class="dropdown-item" href="./generateshapes"><i class="fas fa-vector-square me-2"></i>p5 Shape Generator</a></li>
                                <li><a class="dropdown-item" href="./coordinates"><i class="fas fa-draw-polygon me-2"></i>Find coordinates</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
