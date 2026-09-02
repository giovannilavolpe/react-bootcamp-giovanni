import type { ReactNode } from 'react';
import { useTheme } from './UseLocalStorage';

function ThemeButton({ children }: {children: ReactNode}) {

    const {theme, changeTheme} = useTheme()
            
    return (
            <div>
                <section className={theme ? "blackMode" : "whiteMode"}>
                    <button onClick={changeTheme}> Cambie el tema</button>
                    {children}
                </section>
            </div>
    )
}

export default ThemeButton