package game

type Manager struct {
	Title   string               // name of the game; key into trivia/*.json
	Code    string               // unique game code, 6 uppercase letters/numbers
	Players map[*Player]struct{} // set of players in the game
	Board   map[string]*Player   // category item -> player who claimed it (nil if unclaimed)
	Colors  map[string]struct{}  // set of assigned colors
	Time    int                  // seconds remaining (60 until start, then 180)
}

// NewManager creates a Manager with the given title and code. Time is set to 60,
// board and colors are initialized empty.
func NewManager(title, code string) *Manager {
	return &Manager{
		Title:   title,
		Code:    code,
		Players: make(map[*Player]struct{}),
		Board:   make(map[string]*Player),
		Colors:  make(map[string]struct{}),
		Time:    60,
	}
}

func (m *Manager) SetBoardValue(item string, player *Player) {
	m.Board[item] = player
}

func (m *Manager) GetBoardValue(item string) *Player {
	return m.Board[item]
}
