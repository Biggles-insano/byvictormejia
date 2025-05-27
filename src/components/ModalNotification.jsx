export default function ModalNotification({ message, onClose }) {
    return (
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '400px',
          textAlign: 'center',
        }}>
          <p>{message}</p>
          <button
            onClick={onClose}
            style={{
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    )
  }