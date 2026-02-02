import { Switch, Route } from "wouter";
import { ThemeProvider } from "next-themes";
import ErrorBoundary from "@/components/ErrorBoundary";
import SmoothScroll from "@/components/ui/SmoothScroll";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    );
}

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <SmoothScroll>
                    <Router />
                </SmoothScroll>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;