import { Zap } from 'lucide-react-native'
import { Dimensions, View } from 'react-native'

import { Colors } from '~/lib/constants/colors'
import { useColorScheme } from '~/lib/hooks/use-color-scheme'

const ICON_SIZE = Math.round(Dimensions.get('window').width * 0.55)

export default function HomeScreen() {
  const scheme = useColorScheme()

  return (
    <View className='flex-1 items-center justify-center bg-background'>
      <Zap size={ICON_SIZE} color={Colors[scheme].text} />
    </View>
  )
}
