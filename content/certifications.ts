export type Certification = {
  name: string
  credentialId: string
}

export const verifyUrl = (id: string) => `https://verify.skilljar.com/c/${id}`

// Todas expedidas por Anthropic, may. 2026
export const certifications: Certification[] = [
  { name: 'Claude Code in Action', credentialId: 'odrjxfpkgyuk' },
  { name: 'Claude Code 101', credentialId: 'hk2ddcyvybj5' },
  { name: 'Introduction to Model Context Protocol', credentialId: '9yaizkrek948' },
  { name: 'Model Context Protocol: Advanced Topics', credentialId: '2dfo9g8pkddb' },
  { name: 'Introduction to Subagents', credentialId: 'th7fs8amdtg3' },
  { name: 'Introduction to Agent Skills', credentialId: '9psua6suoye2' },
  { name: 'Claude in Amazon Bedrock', credentialId: 'hvtey4wsh777' },
  { name: "Claude with Google Cloud's Vertex AI", credentialId: 'p4v88grsaw7t' },
  { name: 'Introduction to Claude Cowork', credentialId: 'jhhgahmzdjiy' },
  { name: 'Teaching the AI Fluency Framework', credentialId: 'dt23neewrv6v' },
]

export type Education = {
  school: string
  degree: { es: string; en: string }
  years: string
  note?: string
}

export const education: Education[] = [
  {
    school: 'ConquerX',
    degree: { es: 'Master Full Stack', en: 'Full Stack Master' },
    years: '2022 — 2025',
    note: '8,5',
  },
  {
    school: 'CEPI-BASE',
    degree: {
      es: 'CFGS Desarrollo de Aplicaciones Web',
      en: 'Higher Degree in Web Application Development',
    },
    years: '2020 — 2022',
    note: '9,5',
  },
]
