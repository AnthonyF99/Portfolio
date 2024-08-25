import project from '../../models/Project';
import connectDB from '../../lib/dbConnect';

export default async function handler(req, res) {
  await connectDB()

  if (req.method === 'GET') {
    // Process a GET request
    const projects = await project.find();
    res.status(200).json(projects);
  } else if (req.method === 'POST') {
    // Handle any other HTTP method
    const {title , description, imageurl, more, skills, link } = req.body;
    const Project = new project({
        title:title,
        description: description,
        imageurl:imageurl,
        more:more,
        skills: skills,
        link:link 
      })
      await Project.save()
      console.log("Project saved successfully")
      res.status(200).json({ done: true })
  }
}