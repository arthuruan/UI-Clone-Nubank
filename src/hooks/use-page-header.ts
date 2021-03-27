import React, { useLayoutEffect, DependencyList } from 'react';

import { useNavigation } from '@react-navigation/native';

export function usePageHeader(
  header: React.ReactNode,
  deps: DependencyList = [],
) {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      header,
    });
  }, [navigation, header, deps]);
}
