import { AppWrapper } from "./AppWrapper";
import { RoutePages } from "./routes";

export function App() {
  return (
    <AppWrapper>
      <div>
        <div className="y-border-b text-center p-2">Header</div>
        <div className="bg-white p-2 min-h-[300px]">
          <RoutePages></RoutePages>
        </div>
        <div className="y-border-t text-center p-2">Footer</div>
      </div>
    </AppWrapper>
  );
}
