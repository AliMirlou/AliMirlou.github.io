// URL mapping for frameworks and technologies
const urlMap = {
  'django': 'https://www.djangoproject.com',
  'next.js': 'https://nextjs.org',
  'kubernetes': 'https://kubernetes.io',
  'rabbitmq': 'https://www.rabbitmq.com',
  'express': 'https://expressjs.com',
  'langchain': 'https://www.langchain.com',
  'mongodb': 'https://www.mongodb.com',
  'elasticsearch': 'https://www.elastic.co',
  'azure': 'https://azure.microsoft.com',
  'vue.js': 'https://vuejs.org',
  'go': 'https://go.dev',
  'docker': 'https://www.docker.com',
  'javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'css': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'openjdk': 'https://openjdk.org/',
  'c': 'https://en.cppreference.com/w/c',
  'algorithms': 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',
  'swing': 'https://docs.oracle.com/javase/8/docs/technotes/guides/swing/',
  'tcp': 'https://www.ietf.org/rfc/rfc793.txt',
  'oop': 'https://web.archive.org/web/20100717111134/http://history.siam.org/sup/Fox_1960_LISP.pdf#page=91',
  'gitlab': 'https://about.gitlab.com',
  'sentry': 'https://sentry.io'
};

export default function SkillBadge({ name, formattedName, darkMode = false }) {
  if (!formattedName) {
    // Convert spaces to hyphens and make lowercase for URL compatibility
    formattedName = name.toLowerCase().replace(/\s+/g, '-');
  }

  const url = urlMap[formattedName] || '#';

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={`https://img.shields.io/badge/${name}-${darkMode ? '000' : '6a7282'}?logo=${formattedName}`}
        alt={`${name} badge`}
        className="h-4 hover:opacity-80 transition-[opacity,transform] object-contain hover:scale-110"
      />
    </a>
  );
}
