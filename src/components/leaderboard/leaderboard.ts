import data from "./leaderboard-data.json";
import "./leaderboard.scss";

interface Player {
  rank: number;
  playerName: string;
  gamesPlayed: number;
  totalScore: number;
  streakDays: number;
  favoriteGameName: string;
}

const initials: readonly string[] = ["AP", "CG", "MM", "BP", "SG"];

export const createLeaderboard = (): HTMLElement => {
  const section: HTMLElement = document.createElement("section");
  section.className = "leaderboard";
  section.setAttribute("aria-labelledby", "leaderboard-title");
  section.innerHTML = `
    <h2 id="leaderboard-title" class="leaderboard__title">Top Players<span class="leaderboard__title-extra"> This Week</span></h2>
    <div class="leaderboard__frame">
      <table class="leaderboard__table" aria-labelledby="leaderboard-title">
        <thead><tr>
          <th scope="col">Rank</th><th scope="col">Player</th>
          <th scope="col" class="leaderboard__games">Games<span class="leaderboard__desktop"> Played</span></th>
          <th scope="col"><span class="leaderboard__desktop">Total </span>Score</th>
          <th scope="col">Streak</th><th scope="col" class="leaderboard__favorite">Favorite Game</th>
        </tr></thead><tbody></tbody>
      </table>
    </div>`;
  const body: HTMLTableSectionElement | null = section.querySelector("tbody");
  for (const player of data.data as Player[]) {
    const row: HTMLTableRowElement = document.createElement("tr");
    const compactScore: string = `${Math.floor(player.totalScore / 100) / 10}K`;
    row.innerHTML = `
      <td>#${player.rank}</td>
      <td><span class="leaderboard__player"><span class="leaderboard__avatar leaderboard__avatar--${player.rank}" aria-hidden="true">${initials[player.rank - 1]}</span><span class="leaderboard__name">${player.playerName}</span></span></td>
      <td class="leaderboard__games">${player.gamesPlayed}</td>
      <td><span class="leaderboard__full-score">${player.totalScore.toLocaleString("en-US")}</span><span class="leaderboard__compact-score">${compactScore}</span></td>
      <td>🔥 ${player.streakDays}<span class="leaderboard__desktop"> days</span><span class="leaderboard__compact">d</span></td>
      <td class="leaderboard__favorite"><span class="leaderboard__badge">${player.favoriteGameName}</span></td>`;
    body?.append(row);
  }
  return section;
};
