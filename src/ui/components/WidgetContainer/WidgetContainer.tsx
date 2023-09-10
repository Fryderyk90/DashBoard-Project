


interface WidgetContainerProps {
    children: React.ReactNode
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ children }) => {
    return (
      <div className="border-2 container bg-white p-4">
        {children}
      </div>
    );
  };

export default WidgetContainer