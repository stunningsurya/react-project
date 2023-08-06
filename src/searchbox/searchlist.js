import { SearchResult } from "./Searchresult";
export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.slice(0, 5).map((result, id) => {
        return <SearchResult result={result.Model} id={result.id} key={id} />;
      })}
    </div>
  );
};