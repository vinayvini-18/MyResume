document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: '2024',
        title: ' Hand Gesture Detection System ',
        description: 'Developed a real-time hand gesture recognition system utilizing OpenCV,Python, and Media Pipe. Captured webcam frames, detected hand keypoints, and applied a pre-trained gesture recognizer to achieve precise identification of gestures such as waving, pointing, and more. This project significantly advanced human-computer interaction capabilities, enhancing accessibility and usability'
    },
    {
        date: '2024',
        title: 'Powerof2 Website using AWS services',
        description: 'Deployed a static website on the Aws Amplify which uses DynamoDB to store the math results and the function of the website is to return power of 2.Other services used are Lambda, IAM, API Gateway and DynamoDB.'
    },
    {
        date: '2023',
        title: 'Vehicle Number Plate Detection Using Open CV ',
        description: 'Designed and implemented a cutting-edge computer vision system leveraging OpenCV and Easy OCR. This system achieved real-time vehicle classification and counting, significantly reducing manual data collection efforts in traffic monitoring while enhancing data accuracy'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
