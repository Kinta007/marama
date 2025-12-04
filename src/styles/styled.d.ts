import 'styled-components';
import { Theme } from './theme';

/**
 * styled-components의 DefaultTheme 타입을 확장합니다.
 * 이렇게 하면 TypeScript가 theme 객체의 구조를 인식할 수 있습니다.
 * 
 * 이 파일은 styled-components를 사용할 때 theme.colors, theme.breakpoints 등의
 * 속성에 접근할 때 타입 안정성을 제공합니다.
 */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
