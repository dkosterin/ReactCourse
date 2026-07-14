import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

export function QueryProvider({children}) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { // для получения данных с сервера
                staleTime: 5 * 60 * 1000, // время актуальности данных (мс)
                retry: 1, // сколько раз повторяем запрос при ошибке
                refetchOnWindowFocus: false, // новый запрос при фокусе
                gcTime: 10 * 60 * 1000 // сколько данные хранятся в кэше
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    )
} 