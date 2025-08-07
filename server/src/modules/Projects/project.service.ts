import { AppError } from '../../middlewares/handleError';
import { getProjects } from '../../utils/database';
import { ErrorMessages } from '../../utils/errorMessages';
import { HttpStatusCode } from '../../utils/statusCodes';
import {
  ProjectResponse,
  ProjectResponseElement,
} from './dto/projectResponse.dto';
import { Project } from './project';
import fs from 'fs/promises';
import path from 'path';
export async function filterProjects(
  searchTerm: string
): Promise<ProjectResponse> {
  const projects = await getProjects();
  if (!searchTerm) return await fillSvgContent(projects);
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return await fillSvgContent(filteredProjects);
}

async function fillSvgContent(projects: Project[]): Promise<ProjectResponse> {
  try {
    return Promise.all(
      projects.map(async (project): Promise<ProjectResponseElement> => {
        const filePath = path.join(
          __dirname,
          '..',
          '..',
          'assets',
          'images',
          'icons',
          project.image
        );
        const svgContent = await fs.readFile(filePath, 'utf-8');
        return { ...project, image: svgContent };
      })
    );
  } catch {
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR);
  }
}
