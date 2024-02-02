import { Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = (): ReactElement => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/PapaJohnsGarlicSauce/repos"
      );
      setRepos(response.data?.filter((repo: any) => !repo.fork));
    } catch (error) {
      console.error(error);
      setRepos([]);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <p>
        Here are some selected projects on Github, mostly me messing around with
        stuff. A more detailed project outline can be found on my{" "}
        <Link to={"/resume"}> resume</Link>
      </p>
      <Grid container spacing={2}>
        {repos?.map((repo: any) => (
          <Grid item xs={12} sm={6} md={4} key={repo.id}>
            <Card>
              <CardContent>
                <Typography sx={{ fontSize: 16 }} gutterBottom>
                  {repo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {repo.description}
                </Typography>
                {repo.language}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
