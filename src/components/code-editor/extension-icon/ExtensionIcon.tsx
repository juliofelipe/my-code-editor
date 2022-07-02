import CSSIcon  from '../../../assets/images/css3.svg?component';
import GoIcon from '../../../assets/images/go.svg?component';
import HtmlIcon from '../../../assets/images/html5.svg?component';
import JavaIcon from '../../../assets/images/java.svg?component';
import JavascriptIcon from '../../../assets/images/javascript.svg?component';
import PHPIcon from '../../../assets/images/php.svg?component';
import PythonIcon from '../../../assets/images/python.svg?component';
import RubyIcon from '../../../assets/images/ruby.svg?component';
import TypescriptIcon from '../../../assets/images/typescript.svg?component';
import ReactIcon from '../../../assets/images/react.svg?component';
import DefaultIcon from '../../../assets/images/blank-file.svg?component';

type ExtensionIconProps = {
  extension?: string;
};

const ExtensionIcon = (props: ExtensionIconProps) => {
  const style = {
    height: '15px',
    width: '15px',
  };

  switch (props.extension) {
    case 'jsx':
    case 'tsx':
      return <ReactIcon style={style} />;
    case 'js':
      return <JavascriptIcon style={style} />;
    case 'ts':
      return <TypescriptIcon style={style} />;
    case 'css':
      return <CSSIcon style={style} />;
    case 'php':
      return <PHPIcon style={style} />;
    case 'java':
      return <JavaIcon style={style} />;
    case 'html':
      return <HtmlIcon style={style} />;
    case 'rb':
      return <RubyIcon style={style} />;
    case 'go':
      return <GoIcon style={style} />;
    case 'py':
      return <PythonIcon style={style} />;
    default:
      return <DefaultIcon style={style} />;
  }
};

export default ExtensionIcon;
