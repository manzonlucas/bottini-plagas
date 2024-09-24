interface WaveProps {
  color: string;
  version: 1 | 2;
}

export const Wave: React.FC<WaveProps> = ({ color, version }) => {
  if (version === 1) {
    return (
      <svg
        className="absolute bottom-0 w-full h-24"
        preserveAspectRatio="none"
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`fill-current ${color}`}
          d="M0 59L50 55C100 51 200 44 300 30C400 15 500 -6 600 1C700 8 800 44 900 59C1000 73 1100 66 1150 62L1200 59V80H1150C1100 80 1000 80 900 80C800 80 700 80 600 80C500 80 400 80 300 80C200 80 100 80 50 80H0V59Z"
          fillOpacity="0.99"
        />
      </svg>
    );
  }

  if (version === 2) {
    return (
      <svg
        className="absolute top-0 w-full h-24"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`fill-current ${color}`}
          d="M0,32L60,74.7C120,117,240,203,360,208C480,213,600,139,720,90.7C840,43,960,21,1080,64C1200,107,1320,213,1380,266.7L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          fillOpacity="0.99"
        />
      </svg>
    );
  }

  return null;
};
