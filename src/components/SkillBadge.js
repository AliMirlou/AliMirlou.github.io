// URL mapping for frameworks and technologies
const urlMap = {
  'algorithms': 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',
  'azure': 'https://azure.microsoft.com',
  'c': 'https://en.cppreference.com/w/c',
  'css': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'django': 'https://www.djangoproject.com',
  'docker': 'https://www.docker.com',
  'elasticsearch': 'https://www.elastic.co',
  'express': 'https://expressjs.com',
  'fastapi': 'https://fastapi.tiangolo.com/',
  'gitlab': 'https://about.gitlab.com',
  'go': 'https://go.dev',
  'googlecolab': 'https://colab.research.google.com/',
  'javascript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'kubernetes': 'https://kubernetes.io',
  'langchain': 'https://www.langchain.com',
  'mongodb': 'https://www.mongodb.com',
  'next.js': 'https://nextjs.org',
  'postgresql': 'https://www.postgresql.org/',
  'python': 'http://python.org/',
  'oop': 'https://web.archive.org/web/20100717111134/http://history.siam.org/sup/Fox_1960_LISP.pdf#page=91',
  'openjdk': 'https://openjdk.org/',
  'rabbitmq': 'https://www.rabbitmq.com',
  'react': 'https://react.dev/',
  'redis': 'https://redis.io/',
  'sentry': 'https://sentry.io',
  'stripe': 'https://stripe.com/',
  'swing': 'https://docs.oracle.com/javase/8/docs/technotes/guides/swing/',
  'tailwindcss': 'https://tailwindcss.com/',
  'tcp': 'https://www.ietf.org/rfc/rfc793.txt',
  'vue.js': 'https://vuejs.org'
};

export default function SkillBadge({ name, formattedName, darkMode = false }) {
  if (!formattedName) {
    // Convert spaces to hyphens and make lowercase for URL compatibility
    formattedName = name.toLowerCase().replace(/\s+/g, '-');
  }

  const url = urlMap[formattedName] || '#';
  
  // Add caching parameters to the shields.io URL
  const shieldsUrl = `https://img.shields.io/badge/${name}-${darkMode ? '000' : '6a7282'}?logo=${formattedName}&cacheSeconds=86400`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={shieldsUrl}
        alt={`${name} badge`}
        className="h-4 hover:opacity-80 transition-[opacity,transform] object-contain hover:scale-110"
        loading="lazy"
      />
    </a>
  );
}
