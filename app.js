const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    name: "Abdurrahman Abolaji",
    role: "Junior Cloud Engineer",
    projectTitle: "The Future of AI-Powered Logistics",
    pitch: "Our project integrates AI with real-time infrastructure monitoring and predictive analytics to transform how goods move globally—faster, smarter, and more sustainably.",
    innovation: "We leverage cloud-native architectures, real-time traffic, weather data, and supplier metrics to dynamically reroute logistics operations — making our solution adaptive and resilient unlike traditional systems.",
    skills: [
      "Linux", "HTML", "CSS", "JavaScript", "GitHub"
    ],
    experience: [
      "Junior DevOps Engineer at Payvantage Ltd – managing servers, network monitoring, backups, and cloud integration.",
      "Developed and maintained over 10 websites for clients at OptiEdge Nigeria Ltd.",
      "Web Developer & PR Lead at LASUMEGA – developed & maintained association’s website and managed tech operations."
    ],
    email: "abolajiabdurrahman@gmail.com",
    phone: "+234 708 070 4824"
  });
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
