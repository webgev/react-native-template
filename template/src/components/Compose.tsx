import React from 'react';

interface ComposeProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren>>;
  children: React.ReactNode;
}

export const Compose: React.FC<ComposeProps> = ({
  components = [],
  children,
}) => {
  return (
    <>
      {components.reduceRight(
        (acc, Component) => (
          <Component>{acc}</Component>
        ),
        children,
      )}
    </>
  );
};
