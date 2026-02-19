import AnimatedBackground from '@/components/AnimatedBackground';
import { useGame } from '../context/GameContext';

export const Lobby: React.FC = () => {
  const { ws, wsUrl } = useGame();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 w-full max-w-md px-4 animate-fade-up">
        <div className="card-glass rounded-2xl p-8 text-center">
          <div className="mb-6">
            <div className="inline-block p-3 bg-primary/20 rounded-full mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Connected!
          </h2>

          <p className="text-muted-foreground mb-6">
            You're successfully connected to the game.
          </p>

          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">
              WebSocket status:
            </p>
            <p className="font-mono text-sm text-foreground break-all">
              {ws
                ? ws.readyState === WebSocket.OPEN
                  ? 'Connected'
                  : `Connection: ${['Connecting', 'Open', 'Closing', 'Closed'][ws.readyState]}`
                : wsUrl
                  ? 'Loading...'
                  : 'No connection'}
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Waiting for the game to start...
          </p>
        </div>
      </div>
    </div>
  );
};
