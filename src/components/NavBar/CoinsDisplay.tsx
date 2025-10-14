// components/NavBar/CoinsDisplay.tsx
// Muestra el saldo de monedas del usuario (solo viewers)

interface CoinsDisplayProps {
  coins: number;
}

const CoinsDisplay = ({ coins }: CoinsDisplayProps) => {
  return (
    <div style={{ 
      color: '#ffc107', 
      fontWeight: 'bold', 
      fontSize: '0.9rem',
      marginRight: '0.5rem'
    }}>
      💰 {coins}
    </div>
  );
};

export default CoinsDisplay;
