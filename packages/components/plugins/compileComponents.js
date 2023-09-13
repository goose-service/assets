function compileComponents()
{
  return {
    name: 'compile-components',
    apply: 'build',
    closeBundle()
    {
      console.log('=====>', 'compileComponents()')
    },
  }
}

export default compileComponents
