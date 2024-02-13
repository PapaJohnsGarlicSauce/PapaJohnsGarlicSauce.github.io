import { Card, CardContent, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GithubRepo from "../models/GithubRepo";

const Projects = (): ReactElement => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchRepos = async (): Promise<void> => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/PapaJohnsGarlicSauce/repos"
      );
      setRepos(response.data?.filter((repo: any) => !repo.fork));
    } catch (error) {
      setRepos([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="project-section">
      <h2>Projects</h2>
      <p>
        Here are some selected projects on Github, mostly me messing around with
        stuff and getting cofortable with different frameworks and paradigms. A
        more detailed project outline can be found on my{" "}
        <Link to={"/resume"}> resume</Link>.
      </p>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Grid container spacing={2}>
          {repos?.map((repo) => (
            <Grid item xs={12} sm={6} md={4} key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="card-link"
              >
                <Card variant="outlined">
                  <CardContent className="repo-card">
                    <img
                      className="repo-image"
                      src="https://avatars.githubusercontent.com/u/32753670?v=4"
                      alt="Repo depiction"
                    />
                    <h3>{repo.name}</h3>
                    <p className="description">
                      {repo.description ?? "No description"}
                    </p>
                    <p className="language">
                      {" "}
                      <span
                        className={`dot ${
                          repo.language?.toLowerCase() ?? "none"
                        }`}
                      />
                      {repo.language ?? "N/A"}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Projects;
