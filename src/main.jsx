import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 60, // 1 hour
		}
	}
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   	<QueryClientProvider client={queryClient}>
				<App />
		</QueryClientProvider>

  </React.StrictMode>
)
