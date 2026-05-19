import { render, screen } from '~/lib/test/render'

import { RouteLoadingState, RouteNotFoundState } from './route-state'

describe('RouteState', () => {
  it('renders loading state copy', () => {
    render(<RouteLoadingState />)

    expect(screen.getByText('Loading')).toBeTruthy()
    expect(screen.getByLabelText('Loading')).toBeTruthy()
  })

  it('renders not found state copy', () => {
    render(<RouteNotFoundState />)

    expect(screen.getByText('Screen not found')).toBeTruthy()
    expect(screen.getByText('Return home')).toBeTruthy()
  })
})
