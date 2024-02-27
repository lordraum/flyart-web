import Header from '../components/Header'

export default function MainLayOut ({ children }) {
  return <>
    <Header/>
    <main className="main">
      {children}
    </main>
  </>
}
